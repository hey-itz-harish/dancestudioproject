import React from 'react';
import { motion } from 'framer-motion';

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
                            style={{ borderRight: '1px solid rgba(255, 255, 255, 0.2)', paddingRight: '40px' }}
                        >
                            <div className="contact-info-item">
                                <h4>Phone</h4>
                                <p>(555) 123-4567</p>
                            </div>
                            <div className="contact-info-item">
                                <h4>Email</h4>
                                <p>info@dancestudio.com</p>
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
        </div>
    );
};

export default Contact;
