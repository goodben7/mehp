import { motion } from 'framer-motion';

const LoveLetter = () => {
    const lines = [
        "Mon être humain préféré",
        "Depuis que tu es entrée dans ma vie, tout a changé.",
        "Tu es ma paix quand le monde devient bruyant,",
        "Ma force quand je doute,",
        "Et mon sourire dans les jours sombres.",
        "Je veux te rappeler que je ne t’aime pas seulement pour ce que tu es…",
        "Je t’aime pour la femme extraordinaire que tu deviens chaque jour.",
        "Merci d’être mon refuge, mon inspiration, ma Queen.",
        "Je remercie Dieu pour toi.",
        "Pour ton sourire.",
        "Pour ton cœur.",
        "Pour ta présence dans ma vie.",
        "Je te choisis aujourd’hui.",
        "Je te choisirai demain.",
        "Et je te choisirai encore, chaque jour."
    ];

    return (
        <section className="min-h-screen flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative max-w-2xl mx-auto p-10 md:p-16 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-romantic-pink/50 to-transparent opacity-50" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-romantic-pink/5 rounded-full blur-[80px]" />

                <div className="space-y-4 relative z-10 text-center md:text-left">
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
                        >
                            <p className={`leading-relaxed tracking-wide ${index === 0
                                ? "text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-romantic-pink mb-4 block font-bold"
                                : "text-lg md:text-xl text-gray-300/90 font-light"
                                } ${index === lines.length - 1 ? "font-serif text-white/90 mt-4 italic" : ""}`}>
                                {line}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: lines.length * 0.15 + 0.5, duration: 0.8 }}
                        className="pt-12 flex justify-end"
                    >
                        <p className="font-handwriting text-3xl text-romantic-pink/80 transform -rotate-2">
                            — Pour toujours et à jamais. ❤️
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default LoveLetter;
