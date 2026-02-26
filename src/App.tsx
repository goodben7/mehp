import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ValentinesPage from './pages/ValentinesPage';
import OneYearAnniversary from './pages/OneYearAnniversary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-night text-white overflow-x-hidden pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valentines" element={<ValentinesPage />} />
          <Route path="/anniversary" element={<OneYearAnniversary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
