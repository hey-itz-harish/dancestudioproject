import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Home = ({ id }) => {
    const [showModal, setShowModal] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["ELEVATE", "HARMONIZE", "CELEBRATE", "TRANSCEND"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id={id} className="page home">
            <div className="hero-section">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ display: 'inline-block', minWidth: '350px' }}> {/* Fixed width to prevent shift */}
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[wordIndex]}
                                    className="elevate-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ display: 'inline-block' }}
                                >
                                    <i>{words[wordIndex]}</i>
                                </motion.span>
                            </AnimatePresence>
                        </span> <br />
                        <i><span className="movement-text">YOUR MOVEMENT</span></i>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', marginTop: '10px', color: '#fff' }}
                    >
                        "Preserving the Divine Essence of Ancient Art."
                    </motion.p>


                    <motion.button
                        className="cta-button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1, delay: 0.4 }}
                        onClick={() => setShowModal(true)}
                    >
                        Admission Details
                    </motion.button>
                </div>
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }} onClick={() => setShowModal(false)}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            background: '#1a1a1a',
                            padding: '30px',
                            borderRadius: '15px',
                            border: '1px solid gold',
                            maxWidth: '500px',
                            width: '90%',
                            textAlign: 'center',
                            position: 'relative'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </button>
                        <h2 style={{ color: 'gold', marginBottom: '20px' }}>Admission Details</h2>
                        <div style={{ textAlign: 'left', color: '#fff', lineHeight: '1.6' }}>
                            <p><strong>Courses Offered:</strong> Bharathanatyam / Nattuvangam</p>
                            <p><strong>Batches:</strong> Weekday & Weekend Batches Available</p>
                            <p><strong>Age Group:</strong> 5 Years and above</p>
                            <p><strong>Location:</strong> Kumbakonam</p>
                            <br />
                            <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
                                "Join us to begin your divine journey."
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Home;
