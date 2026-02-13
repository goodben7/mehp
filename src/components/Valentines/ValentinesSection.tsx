import { motion, useScroll, useTransform } from 'framer-motion';
import ValentinesHero from './ValentinesHero';
import LoveLetter from './LoveLetter';
import WhyILoveYou from './WhyILoveYou';
import SurpriseButton from './SurpriseButton';
import ImmersiveQuote from './ImmersiveQuote';
import LoveCounter from './LoveCounter';
import CinematicFinal from './CinematicFinal';

const ValentinesSection = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0a0f1c] text-white selection:bg-romantic-pink/30">
            {/* Ambient Background - Fixed */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,114,182,0.03),_rgba(15,23,42,1))]" />
                <motion.div
                    style={{ y: backgroundY, opacity }}
                    className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"
                />
            </div>

            {/* Floating particles - subtle global effect */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            y: [null, Math.random() * -100 + "%"],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        className="absolute w-1 h-1 bg-romantic-pink rounded-full blur-[1px]"
                    />
                ))}
            </div>


            <div className="relative z-10 w-full">
                <ValentinesHero />

                <div className="max-w-4xl mx-auto px-4">
                    <LoveLetter />
                </div>

                <ImmersiveQuote />

                <div className="max-w-4xl mx-auto px-4">
                    <WhyILoveYou />
                </div>

                <LoveCounter />

                <SurpriseButton />

                <CinematicFinal />
            </div>
        </section>
    );
};

export default ValentinesSection;
