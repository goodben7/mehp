
import { motion } from 'framer-motion';

const FinalMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-t from-night-light/50 to-transparent">
      {/* Background Image - Soft Memory */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-night/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600"
          alt="Future together"
          className="w-full h-full object-cover opacity-20 blur-[3px] scale-105"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            Ce n’est que le début... ✨
          </h2>
          <p className="text-xl md:text-2xl text-muted-text font-light leading-relaxed mb-12">
            Chaque jour avec toi est une nouvelle page de notre histoire.
            <br />
            J'ai hâte d'écrire la suite à tes côtés.
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="inline-block"
          >
            <div className="text-6xl animate-pulse">❤️</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMessage;
