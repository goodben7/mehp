import { motion } from 'framer-motion';
import img7 from '../../assets/7.jpg';

const OneYearHero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-night/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-night/70 z-10" />
                <img
                    src={img7}
                    alt="Background Memory"
                    className="w-full h-full object-cover opacity-30 blur-[2px] scale-105"
                    style={{ objectPosition: 'center 30%' }}
                />
            </div>

            {/* Ambient Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft-gold/5 rounded-full blur-[120px] -z-10" />

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Subtle Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-20px", "20px"],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center space-y-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" as const }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-7xl font-serif text-white tracking-tight leading-tight">
                        Notre Première <span className="text-soft-gold">Année</span>
                    </h1>
                    <div className="h-1 w-24 bg-soft-gold/30 mx-auto rounded-full blur-[1px]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="space-y-2"
                >
                    <p className="text-lg md:text-2xl text-muted-text font-light tracking-widest uppercase">
                        365 jours d’amour.
                    </p>
                    <p className="text-base md:text-xl text-muted-text/60 font-light italic">
                        Une vie à construire.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Défiler</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default OneYearHero;
