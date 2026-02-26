import { motion } from 'framer-motion';
import img5 from '../../assets/5.jpeg';

const AnniversaryFinalCinematic = () => {
    const mainText = "Ce n’est que le début.";
    const words = mainText.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.8
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(12px)",
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#020617] cursor-default z-0">
            {/* 🌌 Cinematic Background */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.05 }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute inset-0 z-0"
            >
                {/* Background Image itself */}
                <img
                    src={img5}
                    alt="Ending Memory"
                    className="w-full h-full object-cover opacity-20 blur-[2px]"
                />

                {/* Radial Gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.4),_#020617_80%)] z-10" />

                {/* Vignette effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-20" />

                {/* Subtle Grain Texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30" />
            </motion.div>

            {/* Invisible Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.1]">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-white rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-40px"],
                            opacity: [0, 0.3, 0]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {/* Main Phrase: Word by Word */}
                    <h3 className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl font-serif text-[#f5f5f5] font-light tracking-[0.05em] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h3>

                    {/* Separator Line */}
                    <div className="flex justify-center flex-col items-center gap-12">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "60px", opacity: 0.2 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
                            className="h-[1px] bg-white"
                        />

                        {/* Secondary Phrase */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3.5, duration: 2, ease: "easeOut" }}
                            className="text-lg md:text-2xl text-muted-text font-serif italic font-light tracking-widest"
                        >
                            Et Je te choisirai toujours.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Backglow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,194,122,0.02),_transparent_60%)] pointer-events-none" />
        </section>
    );
};

export default AnniversaryFinalCinematic;
