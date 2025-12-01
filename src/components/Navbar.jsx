import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <Link to="/" onClick={() => scrollToSection('home')}>DANCE STUDIO</Link>
                </div>

                <div className="nav-links">
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                    <a href="#content" onClick={(e) => { e.preventDefault(); scrollToSection('content'); }}>Content</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <a href="#home" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                        <a href="#about" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                        <a href="#content" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('content'); }}>Content</a>
                        <a href="#contact" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
