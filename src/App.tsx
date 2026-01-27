import HeroSection from './components/HeroSection';
import Countdown from './components/Countdown';
import PersonalMessage from './components/PersonalMessage';
import FinalMessage from './components/FinalMessage';
import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white overflow-x-hidden">
      <Particles />
      <HeroSection />
      <Countdown />
      <PersonalMessage />
      <FinalMessage />
      <footer className="text-center py-8 text-pink-300 text-sm">
        Fait avec 💖 par Benjii
      </footer>
    </div>
  );
}

export default App;
