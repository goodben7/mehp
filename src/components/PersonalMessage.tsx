import { motion } from 'framer-motion';

const PersonalMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-20">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-soft-gold/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-romantic-pink/10 rounded-full blur-2xl" />

          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block animate-pulse-slow">💌</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-2 drop-shadow-md">
              Mon être humain préféré
            </h3>
            <div className="h-1 w-20 bg-soft-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-muted-text leading-relaxed font-light text-center">
            <p>
              Chaque jour à tes côtés est un cadeau précieux.
              Tu illumines ma vie par ta présence, ton sourire et ta douceur.
            </p>
            <p>
              En ce jour spécial, je veux que tu saches à quel point tu comptes pour moi.
              Tu es ma source d’inspiration, ma joie et mon bonheur.
            </p>
            <p>
              Merci d’être restée à mes côtés dans chaque épreuve, chaque victoire, chaque silence.
              Ton amour m’a porté, fortifié et apaisé.
            </p>
            <p>
              Je prie que cette nouvelle année de ta vie t’apporte tout ce que ton cœur désire,
              autant de bonheur que tu en donnes,
              et encore plus de moments magiques… ensemble.
            </p>
            <p>
              Pour toujours et à jamais ❤️
            </p>
            <p className="text-4xl md:text-5xl font-handwriting mt-12 text-romantic-pink drop-shadow-sm transform -rotate-2">
              Je t'aime infiniment 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalMessage;
