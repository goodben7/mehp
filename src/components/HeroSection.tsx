import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div
        className={`text-center transform transition-all duration-2000 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient leading-tight">
          🎉 Joyeux Anniversaire<br />Mon être Humain Préféré 🎂
        </h1>
        <p className="text-xl md:text-3xl text-pink-300 font-light animate-fade-in-delay">
          De la part de ton Benjii ❤️
        </p>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="heart-float" style={{ left: '10%', animationDelay: '0s' }}>💖</div>
        <div className="heart-float" style={{ left: '85%', animationDelay: '2s' }}>💕</div>
        <div className="heart-float" style={{ left: '30%', animationDelay: '4s' }}>💗</div>
        <div className="heart-float" style={{ left: '70%', animationDelay: '1s' }}>✨</div>
        <div className="heart-float" style={{ left: '50%', animationDelay: '3s' }}>💝</div>
      </div>
    </section>
  );
};

export default HeroSection;
