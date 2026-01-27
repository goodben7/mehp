import { useEffect, useRef, useState } from 'react';

const FinalMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div
        className={`text-center transform transition-all duration-2000 ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-90'
        }`}
      >
        <div className="mb-8 text-8xl animate-pulse-slow">
          ✨
        </div>
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
          Ce n'est que<br />le début
        </h2>
        <p className="text-xl md:text-2xl text-pink-200 mt-8">
          Notre plus belle aventure continue...
        </p>
        <div className="mt-12 flex justify-center gap-4 text-4xl">
          <span className="animate-float-delayed-1">💖</span>
          <span className="animate-float-delayed-2">🌟</span>
          <span className="animate-float-delayed-3">💝</span>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;
