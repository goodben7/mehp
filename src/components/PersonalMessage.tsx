import { useEffect, useRef, useState } from 'react';

const PersonalMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-2xl transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="message-card">
          <div className="text-6xl mb-8 text-center">💌</div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Pour Toi, Queen
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-gray-100 leading-relaxed">
            <p>
              Chaque jour à tes côtés est un cadeau précieux. Tu illumines ma vie
              de ta présence, de ton sourire et de ta douceur.
            </p>
            <p>
              En ce jour spécial, je veux que tu saches à quel point tu comptes
              pour moi. Tu es ma source d'inspiration, ma joie et mon bonheur.
            </p>
            <p>
              Que cette nouvelle année t'apporte tout ce que ton cœur désire,
              autant de bonheur que tu en donnes aux autres, et des moments
              magiques que nous partagerons ensemble.
            </p>
            <p className="text-center text-2xl mt-8 text-pink-300">
              Je t'aime infiniment 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalMessage;
