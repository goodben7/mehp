import { motion } from 'framer-motion';

const ValentinesHero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
      {/* Background glow specific to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-romantic-pink/5 rounded-full blur-[120px] -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink via-white to-romantic-pink mb-8 drop-shadow-[0_0_25px_rgba(244,114,182,0.3)] leading-tight"
      >
        💘 Édition Spéciale <br /> Saint-Valentin
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-muted-text/80 font-light italic tracking-wide max-w-2xl mx-auto"
      >
        Parce qu’avec toi, chaque jour est une célébration ❤️
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ValentinesHero;
