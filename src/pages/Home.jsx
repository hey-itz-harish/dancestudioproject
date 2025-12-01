import React from 'react';
import { motion } from 'framer-motion';


const Home = ({ id }) => {
    return (
        <div id={id} className="page home">
            <div className="hero-section">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="elevate-text"><i>ELEVATE</i></span> <br />
                        <i><span className="movement-text">YOUR MOVEMENT</span></i>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Where passion meets precision. Join the elite dance experience.
                    </motion.p>
                    <motion.button
                        className="cta-button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1, delay: 0.4 }}
                    >
                        Start Your Journey
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Home;
