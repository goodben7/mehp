import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const SurpriseButton = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <section className="min-h-[50vh] flex flex-col items-center justify-center py-20">
            <AnimatePresence mode="wait">
                {!isRevealed ? (
                    <motion.button
                        key="button"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsRevealed(true)}
                        className="group relative px-12 py-6 rounded-full overflow-hidden"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-romantic-pink/20 to-purple-500/20 backdrop-blur-md border border-romantic-pink/30 group-hover:border-romantic-pink/50 transition-colors duration-500" />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-romantic-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <span className="relative z-10 flex items-center space-x-4">
                            <Gift className="w-6 h-6 text-romantic-pink" />
                            <span className="text-white font-serif text-xl tracking-wide">Découvrir ton message secret</span>
                        </span>
                    </motion.button>
                ) : (
                    <motion.div
                        key="message"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center px-6 max-w-3xl mx-auto relative"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                            className="absolute inset-0 bg-romantic-pink/10 blur-[100px] -z-10 rounded-full"
                        />

                        <Sparkles className="w-8 h-8 text-soft-gold mx-auto mb-6 opacity-80" />

                        <h3 className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-8">
                            "Avec toi, chaque jour ressemble à la plus belle des Saint-Valentin."
                        </h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-xl md:text-2xl text-romantic-pink font-light italic"
                        >
                            Mon être humain préféré
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SurpriseButton;
