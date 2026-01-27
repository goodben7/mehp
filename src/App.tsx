import HeroSection from './components/HeroSection';
import SpecialDate from './components/SpecialDate';
import PersonalMessage from './components/PersonalMessage';
import FinalMessage from './components/FinalMessage';
import Gallery from './components/Gallery';
import Particles from './components/Particles';

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

      <footer className="relative z-10 text-center py-8 text-white/20 text-sm">
        Fait avec 💖 par Benjii
      </footer>
    </div>
  );
}

export default App;
