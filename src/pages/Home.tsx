import HeroSection from '../components/HeroSection';
import SpecialDate from '../components/SpecialDate';
import PersonalMessage from '../components/PersonalMessage';
import FinalMessage from '../components/FinalMessage';
import Gallery from '../components/Gallery';
import Particles from '../components/Particles';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Particles />

            <main className="relative z-10 flex flex-col gap-0 md:gap-10">
                <HeroSection />
                <SpecialDate />
                <Gallery />
                <PersonalMessage />
                <FinalMessage />
            </main>

            <Footer />
        </>
    );
};

export default Home;
