import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Contact = ({ id }) => {
    return (
        <div id={id} className="page contact">
            <div className="container">
                <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: '2.5rem', marginBottom: '30px' }}
                    >
                        Get in Touch
                    </motion.h2>

                    <div className="contact-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="contact-info-section"
                        >
                            <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <h4 style={{ margin: 0, minWidth: '60px' }}>Phone:</h4>
                                <p style={{ margin: 0 }}>+91 9345555555</p>
                            </div>
                            <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <h4 style={{ margin: 0, minWidth: '60px' }}>Email:</h4>
                                <p style={{ margin: 0 }}>malligaibharathalaya15@gmail.com</p>
                            </div>

                            <div className="contact-info-item">
                                <h4>Location</h4>
                                <div style={{ width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden', marginTop: '10px' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3472645700005!2d79.37000000000000!3d10.96000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU3JzM2LjAiTiA3OcKwMjInMTIuMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Location Map"
                                    ></iframe>
                                </div>
                                <p style={{ fontSize: '0.9rem', marginTop: '10px', color: '#ccc' }}>
                                    No 5 Ashok nagar hathiram Karupur Koranattu karupu, PO, Kumbakonam, Tamil Nadu 612401
                                </p>
                            </div>

                            <div className="contact-info-item" style={{ marginTop: '20px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Connect with us</h4>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <a href="https://www.instagram.com/srimalligaibhardhalaya?igsh=MWF5NnAwN3V1aGZ2Zw==" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                            alt="Instagram"
                                            style={{ width: '40px', height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </a>
                                    <a href="https://www.facebook.com/srimalligaibhardhalaya" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                            alt="Facebook"
                                            style={{ width: '40px', height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </a>
                                    <a href="https://wa.me/919345555555" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                            alt="WhatsApp"
                                            style={{ width: '40px', height: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            <input type="text" placeholder="Name" className="contact-input" />
                            <input type="email" placeholder="Email" className="contact-input" />
                            <textarea placeholder="Message" className="contact-input" rows="4" style={{ resize: 'none' }}></textarea>
                            <button type="submit" className="cta-button" style={{ width: '100%' }}>Send Message</button>
                        </motion.form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
