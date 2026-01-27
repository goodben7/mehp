import { motion } from 'framer-motion';

const PersonalMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">💌</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-2">
              Pour Toi, Queen
            </h3>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light text-center">
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
            <p className="text-3xl md:text-4xl font-handwriting mt-12 text-gold">
              Je t'aime infiniment 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalMessage;
