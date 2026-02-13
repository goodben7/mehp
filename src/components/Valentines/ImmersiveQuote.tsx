import { motion } from 'framer-motion';

const ImmersiveQuote = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative z-10 px-6">
            <div className="text-center">
                <motion.h3
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-8"
                >
                    Avec toi, <br />
                    <span className="text-romantic-pink italic">je me sens chez moi.</span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="text-lg md:text-xl text-muted-text font-light tracking-widest uppercase"
                >
                    Peu importe où nous serons.
                </motion.p>
            </div>
        </section>
    );
};

export default ImmersiveQuote;
