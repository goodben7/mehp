import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ValentinesSection from '../components/Valentines/ValentinesSection';
import Particles from '../components/Particles';
import Footer from '../components/Footer';

const ValentinesPage = () => {
    return (
        <div className="min-h-screen bg-night text-white overflow-x-hidden">
            <Particles />

            {/* Back Navigation */}
            <div className="absolute top-6 left-6 z-50">
                <Link
                    to="/"
                    className="flex items-center space-x-2 text-white/60 hover:text-romantic-pink transition-colors group"
                >
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-romantic-pink/20 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="text-sm uppercase tracking-widest font-light">Retour</span>
                </Link>
            </div>

            <ValentinesSection />
            <Footer />
        </div>
    );
};

export default ValentinesPage;
