import { motion } from 'framer-motion';

const FirstYearStory = () => {
    const stories = [
        {
            title: "Le début",
            text: "Ces premiers regards, cette étincelle qui a tout changé en un instant."
        },
        {
            title: "Les découvertes",
            text: "Apprendre à te connaître, découvrir ton monde, créer le nôtre."
        },
        {
            title: "Les épreuves",
            text: "Parce que grandir ensemble, c'est aussi traverser les tempêtes main dans la main."
        },
        {
            title: "Aujourd’hui",
            text: "Plus forts, plus unis. Une évidence qui se confirme chaque jour."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-32 px-4 bg-night">
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-serif text-white text-center mb-24 tracking-wide"
                >
                    Ce que cette année a été…
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-32 relative"
                >
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="pl-8 relative"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-soft-gold" />

                            <h3 className="text-soft-gold font-serif text-xl mb-4 italic">
                                {story.title}
                            </h3>
                            <p className="text-muted-text text-lg font-light leading-relaxed">
                                {story.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FirstYearStory;
