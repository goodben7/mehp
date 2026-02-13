import { motion } from 'framer-motion';
import img6 from '../../assets/6.jpeg';

const CinematicFinal = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative z-10 bg-night overflow-hidden">
            {/* Background Image - Subtle & Cinematic */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-night/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70 z-10" />
                <img
                    src={img6}
                    alt="Background Memory"
                    className="w-full h-full object-cover opacity-20 blur-[3px] scale-105"
                    style={{ objectPosition: 'center 30%' }}
                />
            </div>

            {/* Background Grain/Noise could be added here via CSS or image */}
            <div className="absolute inset-0 bg-romantic-pink/5 opacity-20 pointer-events-none" />

            <div className="text-center px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-serif text-white mb-8"
                >
                    Joyeuse Saint-Valentin,<br />
                    <span className="text-romantic-pink italic">mon amour.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="text-lg md:text-xl text-white font-light tracking-widest uppercase mt-8"
                >
                    Merci d’exister.
                </motion.p>
            </div>

            {/* Very subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </section>
    );
};

export default CinematicFinal;
