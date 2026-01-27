import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {

  function calculateTimeLeft() {
    const difference = +new Date("2026-02-17") - +new Date(); // Adapter la date ici
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (Object.keys(newTimeLeft).length === 0) {
        setHasEnded(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof typeof timeLeft] === undefined) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-4 my-2">
        <motion.div
          key={`${interval}-${timeLeft[interval as keyof typeof timeLeft]}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-6xl font-serif text-white font-bold glass-card w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          {timeLeft[interval as keyof typeof timeLeft]}
        </motion.div>
        <span className="text-sm uppercase tracking-widest text-white/70">{interval}</span>
      </div>
    );
  });

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      {hasEnded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gold mb-4">Aujourd’hui, on célèbre Queen 💖</h2>
          <p className="text-xl text-white/80">Que la fête commence !</p>
        </motion.div>
      ) : (
        <>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-light mb-8 text-white/80"
          >
            Le grand moment approche...
          </motion.h3>
          <div className="flex flex-wrap justify-center">
            {timerComponents.length ? timerComponents : <span>C'est l'heure !</span>}
          </div>
        </>
      )}
    </section>
  );
};

export default Countdown;
