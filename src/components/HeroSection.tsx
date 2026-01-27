import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-6 inline-block"
        >
          <Heart className="w-16 h-16 text-gold fill-gold/20 mx-auto animate-pulse-slow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide"
        >
          Joyeux Anniversaire
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl md:text-5xl font-light text-gold italic"
        >
          Ma Queen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 text-lg text-white/60 animate-bounce"
        >
          Scroll pour découvrir ta surprise ↓
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
