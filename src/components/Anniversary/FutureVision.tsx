import { motion } from 'framer-motion';

const FutureVision = () => {
    const goals = [
        "Continuer à apprendre ensemble",
        "Voyager",
        "Construire des projets",
        "Grandir côte à côte"
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-48 px-4 bg-night relative overflow-hidden">
            <div className="max-w-2xl mx-auto text-center space-y-24">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="text-3xl md:text-4xl font-serif text-white/90 italic tracking-wider mb-24"
                >
                    Et maintenant…
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                >
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-8 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-soft-gold/30 hover:shadow-[0_0_30px_rgba(245,194,122,0.1)] transition-all duration-700 group cursor-default"
                        >
                            <span className="text-xl md:text-2xl text-muted-text/80 group-hover:text-white transition-colors duration-500 font-light tracking-wide">
                                {goal}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FutureVision;
