
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Reset from './pages/Reset';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
