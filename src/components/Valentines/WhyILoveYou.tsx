import { motion, Variants } from 'framer-motion';
import { Heart } from 'lucide-react';

const WhyILoveYou = () => {


    // Subtle blur effect for earlier items as we scroll down (cinematic touch)
    // This is a global effect for the list container or background, 
    // but implementing per-card focus might be distracting. 
    // Let's settle for a very clean staggered reveal which is premium standard.

    const reasons = [
        "Ton sourire qui illumine ma vie",
        "Ta douceur infinie qui apaise",
        "Ta force admirable au quotidien",
        "Notre complicité unique",
        "La paix que tu m’apportes"
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-32 px-4 relative">
            {/* Ambient Background - Radial Gradient & Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.03),_transparent_70%)] pointer-events-none -z-10" />

            <div className="max-w-xl mx-auto relative z-10">

                {/* Immersive Intro Phrase */}
                <div className="text-center mb-24 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-sm md:text-base text-soft-gold uppercase tracking-[0.2em] font-light"
                    >
                        Mon Amour
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="text-3xl md:text-4xl font-serif text-white/90"
                    >
                        Je <span className="text-romantic-pink italic">t'aime</span> Pour
                    </motion.h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative"
                        >
                            <div className="relative p-8 md:p-10 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/[0.04] hover:border-romantic-pink/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-700 ease-out group cursor-default overflow-hidden">

                                {/* Inner Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-romantic-pink/0 via-romantic-pink/0 to-romantic-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="flex items-center space-x-6 relative z-10">
                                    <div className="p-4 bg-white/5 rounded-full border border-white/5 group-hover:border-romantic-pink/30 group-hover:bg-romantic-pink/10 transition-colors duration-700">
                                        <Heart
                                            className="w-6 h-6 text-white/40 group-hover:text-romantic-pink transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-700 leading-tight">
                                        {reason}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyILoveYou;
