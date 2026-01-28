import { motion } from 'framer-motion';

const SpecialDate = () => {
    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-card p-12 md:p-16 rounded-3xl text-center border-soft-gold/10"
            >
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl font-light mb-8 text-muted-text tracking-[0.2em] uppercase"
                >
                    Une date spéciale ✨
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-romantic-pink/20 blur-[50px] rounded-full animate-pulse-slow" />
                    <h2 className="relative text-6xl md:text-8xl font-serif text-romantic-pink font-bold drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]">
                        03 / 02 / 2026
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-lg text-white/60 font-light italic"
                >
                    Le jour où on célèbre mon être humain préféré 💖
                </motion.p>
            </motion.div>
        </section>
    );
};

export default SpecialDate;
