import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-03T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isToday: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isToday) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl md:text-8xl mb-6 animate-bounce-slow">
            🎂
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            C'est aujourd'hui 💖
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Compte à rebours ✨
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="countdown-card">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Jours</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Heures</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Secondes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
