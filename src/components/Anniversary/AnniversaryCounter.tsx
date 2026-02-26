import { motion } from 'framer-motion';

const AnniversaryCounter = () => {
    const stats = [
        { label: "Année", value: "1" },
        { label: "Mois", value: "12" },
        { label: "Jours", value: "365" },
        { label: "Souvenirs", value: "Des milliers" }
    ];

    return (
        <section className="py-32 px-4 bg-night relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-soft-gold uppercase tracking-[0.3em] text-sm mb-12"
                >
                    Depuis le 27/02/2025…
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl md:text-5xl font-serif text-white mb-2">
                                {stat.value}
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-muted-text font-light">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 0.3, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-[1px] bg-white mt-20 mx-auto max-w-xs"
                />
            </div>
        </section>
    );
};

export default AnniversaryCounter;
