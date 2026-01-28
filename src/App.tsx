import HeroSection from './components/HeroSection';
import SpecialDate from './components/SpecialDate';
import PersonalMessage from './components/PersonalMessage';
import FinalMessage from './components/FinalMessage';
import Gallery from './components/Gallery';
import Particles from './components/Particles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-night text-white overflow-x-hidden pt-10">
      <Particles />

      <main className="relative z-10 flex flex-col gap-0 md:gap-10">
        <HeroSection />
        <SpecialDate />
        <Gallery />
        <PersonalMessage />
        <FinalMessage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
