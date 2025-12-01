import React from 'react';
import { motion } from 'framer-motion';

import natraja from '../assets/natraja.png';

const About = ({ id }) => {
    return (
        <motion.div
            id={id}
            className="page about"
            style={{
                position: 'relative',
                overflow: 'hidden'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            {/* <DanceBackground3D /> */}
            <div className="container section" style={{ position: 'relative', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'linear-gradient(to right, var(--accent), var(--highlight))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    We are a premier dance studio dedicated to excellence. Our instructors are world-class professionals who are passionate about teaching and performing.
                </motion.p>

                <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            style={{
                                background: 'rgba(26, 26, 26, 0.8)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: 'none',
                                backdropFilter: 'blur(5px)'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + item * 0.1 }}
                        >
                            <h3 style={{ color: 'var(--highlight)' }}>Instructor {item}</h3>
                            <p>Expert in Ballet and Contemporary.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;
