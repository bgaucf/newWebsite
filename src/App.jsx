import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Officers from './pages/Officers';
import Alumni from './pages/Alumni';
import Research from './pages/Research';
import Football from './pages/research/Football';
import Basketball from './pages/research/Basketball';
import Baseball from './pages/research/Baseball';
import Soccer from './pages/research/Soccer';
import Hockey from './pages/research/Hockey';
import Other from './pages/research/Other';
import Competitions from './pages/Competitions';
import FantasySports from './pages/FantasySports';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/officers" element={<Officers />} />
          <Route path="/about/alumni" element={<Alumni />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/football" element={<Football />} />
          <Route path="/research/basketball" element={<Basketball />} />
          <Route path="/research/baseball" element={<Baseball />} />
          <Route path="/research/soccer" element={<Soccer />} />
          <Route path="/research/hockey" element={<Hockey />} />
          <Route path="/research/other" element={<Other />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competitions/fantasy-sports" element={<FantasySports />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
