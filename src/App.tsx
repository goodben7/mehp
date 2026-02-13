import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ValentinesPage from './pages/ValentinesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-night text-white overflow-x-hidden pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valentines" element={<ValentinesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
