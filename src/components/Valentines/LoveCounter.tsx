import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveCounter = () => {
    const [timeLeft, setTimeLeft] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Relationship Start Date: 27/02/2025
    const START_DATE = new Date("2025-02-27T00:00:00");

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            let years = now.getFullYear() - START_DATE.getFullYear();
            let months = now.getMonth() - START_DATE.getMonth();
            let days = now.getDate() - START_DATE.getDate();
            let hours = now.getHours() - START_DATE.getHours();
            let minutes = now.getMinutes() - START_DATE.getMinutes();
            let seconds = now.getSeconds() - START_DATE.getSeconds();

            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }
            if (hours < 0) {
                hours += 24;
                days--;
            }
            if (days < 0) {
                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += previousMonth.getDate();
                months--;
            }
            if (months < 0) {
                months += 12;
                years--;
            }

            setTimeLeft({ years, months, days, hours, minutes, seconds });
        };

        calculateTime();
        const timer = setInterval(calculateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const AnimatedDigit = ({ value }: { value: number }) => (
        <div className="relative h-12 md:h-16 w-12 md:w-16 flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={value}
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(5px)", position: "absolute" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute text-4xl md:text-6xl font-serif text-romantic-pink font-bold drop-shadow-[0_0_15px_rgba(244,114,182,0.25)]"
                >
                    {value < 10 ? `0${value}` : value}
                </motion.span>
            </AnimatePresence>
        </div>
    );

    const CounterItem = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-6 mb-8 min-w-[80px]">
            <AnimatedDigit value={value} />
            <span className="text-xs md:text-sm text-muted-text uppercase tracking-[0.2em] mt-4 font-light">{label}</span>
        </div>
    );

    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center relative z-10 py-20 bg-night/50">
            {/* Background glow for this section */}
            <div className="absolute inset-0 bg-romantic-pink/5 blur-[100px] -z-10 rounded-full scale-75" />

            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-white/50 mb-16 font-light tracking-wide text-center px-4"
            >
                Depuis que notre histoire a commencé
            </motion.h3>

            <div className="flex flex-wrap justify-center items-center max-w-5xl mx-auto gap-4 md:gap-8">
                {timeLeft.years > 0 && <CounterItem value={timeLeft.years} label="Ans" />}
                {timeLeft.months > 0 && <CounterItem value={timeLeft.months} label="Mois" />}
                <CounterItem value={timeLeft.days} label="Jours" />
                <CounterItem value={timeLeft.hours} label="Heures" />
                <CounterItem value={timeLeft.minutes} label="Minutes" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-16 px-8 py-3 rounded-full border border-soft-gold/20 bg-soft-gold/5 backdrop-blur-md hover:bg-soft-gold/10 transition-colors duration-500"
            >
                <span className="text-soft-gold text-sm md:text-base italic tracking-wide">Pour Toujours et à Jamais</span>
            </motion.div>
        </section>
    );
};

export default LoveCounter;
