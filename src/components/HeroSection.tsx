import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import img6 from '../assets/6.jpeg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      {/* Background Image - Subtle & Cinematic */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-night/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70 z-10" />
        <img
          src={img6}
          alt="Background Memory"
          className="w-full h-full object-cover opacity-20 blur-[3px] scale-105"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-romantic-pink/5 rounded-full blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content Block - Optically Centered */}
      <div className="text-center z-10 px-4 -translate-y-8 md:-translate-y-12">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-6 md:mb-8 inline-block"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            <Heart className="w-20 h-20 md:w-24 md:h-24 text-soft-gold fill-soft-gold/20 mx-auto drop-shadow-[0_0_15px_rgba(245,194,122,0.3)]" />
          </motion.div>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif text-white tracking-wide drop-shadow-lg leading-tight"
          >
            Joyeux Anniversaire
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-3xl md:text-5xl font-light text-romantic-pink italic drop-shadow-md"
        >
          Mon être humain préféré
        </motion.h2>
      </div>

      {/* Scroll Indicator - Bottom Pinned */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 z-10 mx-auto flex flex-col items-center"
      >
        <p className="text-muted-text text-sm uppercase tracking-widest mb-4 font-light opacity-80">Scroll pour découvrir ta surprise</p>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-soft-gold w-6 h-6 md:w-8 md:h-8"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
