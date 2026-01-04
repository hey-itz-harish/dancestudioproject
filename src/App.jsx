import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';

function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <div className="app-container">
        <Slideshow />
        <Navbar />
        <div className="snap-container">
          <Home id="home" />
          <About id="about" />
          <Content id="content" />
          <Contact id="contact" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
