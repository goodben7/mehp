import OneYearHero from '../components/Anniversary/OneYearHero';
import AnniversaryCounter from '../components/Anniversary/AnniversaryCounter';
import FirstYearStory from '../components/Anniversary/FirstYearStory';
import AnniversaryLetter from '../components/Anniversary/AnniversaryLetter';
import FutureVision from '../components/Anniversary/FutureVision';
import AnniversaryFinalCinematic from '../components/Anniversary/AnniversaryFinalCinematic';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OneYearAnniversary = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="bg-night min-h-screen selection:bg-soft-gold/30 selection:text-white">
            {/* Stylish Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="fixed top-8 left-8 z-[60]"
            >
                <Link to="/">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-soft-gold/30 transition-all duration-500 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-xs uppercase tracking-widest font-light">Retour</span>
                    </button>
                </Link>
            </motion.div>
            {/* Elegant Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-soft-gold z-50 origin-left"
                style={{ scaleX }}
            />

            <OneYearHero />

            <div className="relative">
                {/* Subtle vertical separator decoration */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/5 via-white/10 to-transparent hidden md:block" />

                <AnniversaryCounter />
                <FirstYearStory />
                <AnniversaryLetter />
                <FutureVision />
            </div>

            <AnniversaryFinalCinematic />

            <Footer />
        </main>
    );
};

export default OneYearAnniversary;
