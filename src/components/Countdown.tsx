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
      <div key={interval} className="countdown-card group flex flex-col items-center mx-2 md:mx-4 my-2 min-w-[100px] md:min-w-[120px]">
        <motion.div
          key={`${interval}-${timeLeft[interval as keyof typeof timeLeft]}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="countdown-number"
        >
          {timeLeft[interval as keyof typeof timeLeft]}
        </motion.div>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <section className="py-20 flex flex-col items-center justify-center relative z-10">
      {hasEnded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center glass-card p-10 rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-romantic-pink mb-4">Aujourd’hui, on célèbre Queen 💖</h2>
          <p className="text-xl text-muted-text">Que la fête commence !</p>
        </motion.div>
      ) : (
        <>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-light mb-8 text-soft-gold tracking-[0.2em] uppercase"
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
