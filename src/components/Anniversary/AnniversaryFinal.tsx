import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnniversaryFinal = () => {
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNext(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="h-screen bg-[#020617] w-full flex items-center justify-center text-center px-4 overflow-hidden relative">
            <AnimatePresence mode="wait">
                {!showNext ? (
                    <motion.div
                        key="merci"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 2, ease: "easeInOut" as const }}
                        className="space-y-6"
                    >
                        <motion.h3
                            className="text-2xl md:text-3xl font-serif text-white tracking-[0.2em] font-light italic"
                        >
                            Merci pour cette première année.
                        </motion.h3>
                    </motion.div>
                ) : (
                    <motion.div
                        key="debut"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, ease: "easeOut" as const }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl md:text-5xl font-serif text-white/90 tracking-[0.1em] font-light">
                            Ce n’est que le début.
                        </h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ duration: 3, delay: 1 }}
                            className="h-[1px] bg-soft-gold/30 mx-auto"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Faint Ambient Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.5),_transparent_70%)] pointer-events-none" />
        </section>
    );
};

export default AnniversaryFinal;
