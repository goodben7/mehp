const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {particles.map((i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
        </div>
      ))}
    </div>
  );
};

export default Particles;
