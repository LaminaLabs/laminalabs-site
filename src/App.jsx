import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Impressum from './pages/Impressum';
import LanguageSwitch from './components/LanguageSwitch';
import { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className={language}>
        <LanguageSwitch language={language} setLanguage={setLanguage} />
        <Header />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/privacy" element={<Privacy language={language} />} />
          <Route path="/impressum" element={<Impressum language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;