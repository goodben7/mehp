
import { motion } from 'framer-motion';
import img1 from '../assets/1.jpeg';

const FinalMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-t from-night-light/50 to-transparent">
      {/* Background Image - Soft Memory with Subtle Zoom */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-night/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70 z-10" />
        <motion.img
          src={img1}
          alt="Future together"
          className="w-full h-full object-cover opacity-20 blur-[3px]"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center z-10">
        {/* Title - Fade + Slide Up */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 md:mb-14 leading-tight drop-shadow-lg"
        >
          Ce n'est que le début... ✨
        </motion.h2>

        {/* First Phrase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="text-xl md:text-3xl text-muted-text font-light leading-loose mb-4"
        >
          Tant que je serai là, tu ne seras jamais seule.
        </motion.p>

        {/* Second Phrase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, duration: 1, ease: "easeOut" }}
          className="text-xl md:text-3xl text-muted-text font-light leading-loose mb-12 md:mb-16"
        >
          J'ai hâte d'écrire la suite à tes côtés.
        </motion.p>

        {/* Heart with Subtle Pulsation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.5, type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-block"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl md:text-7xl"
            style={{ filter: 'drop-shadow(0 0 20px rgba(244, 114, 182, 0.4))' }}
          >
            ❤️
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMessage;
