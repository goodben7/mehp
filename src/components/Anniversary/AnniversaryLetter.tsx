import { motion } from 'framer-motion';

const AnniversaryLetter = () => {
    const phrases = [
        "Un an déjà…",
        "En un an, tu es devenue mon évidence.",
        "Merci pour chaque moment partagé, chaque sourire, chaque soutien.",
        "Ce que nous avons construit en un an me rend fier.",
        "Et je suis prêt pour tout ce que l’avenir nous réserve."
    ];

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut" as const,
                staggerChildren: 1,
                delayChildren: 0.5
            }
        }
    };

    const phraseVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-48 px-4 bg-night relative">
            {/* Ambient Backglow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-2xl mx-auto p-12 md:p-16 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.07] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] text-center relative z-10"
            >
                <div className="space-y-10">
                    {phrases.map((phrase, index) => (
                        <motion.p
                            key={index}
                            variants={phraseVariants}
                            className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed tracking-wide italic"
                        >
                            {phrase}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 6.5, duration: 1.5 }}
                    className="mt-16 pt-8 border-t border-white/5"
                >
                    <p className="text-soft-gold font-handwriting text-3xl md:text-4xl tracking-wide opacity-80">
                        — Pour toujours et à jamais ❤️
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AnniversaryLetter;
