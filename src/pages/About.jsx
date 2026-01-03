import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/about/image1.png';
import image2 from '../assets/about/image2.png';
import image3 from '../assets/about/image3.png';

const About = ({ id }) => {
    const sectionStyle = {
        background: 'rgba(26, 26, 26, 0.34)',
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        textAlign: 'left',
        display: 'block',
        overflow: 'auto',
        marginBottom: '40px'
    };

    const imageStyle = {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        objectFit: 'cover',
        marginBottom: '10px'
    };

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
            <div className="container section" style={{ position: 'relative', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="responsive-h1"
                >
                    <span className="elevate-text">About Us</span>
                </motion.h1>
                <div style={{ marginTop: '40px' }}>

                    {/* Section 1 */}
                    <motion.div
                        style={sectionStyle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <img
                            src={image1}
                            alt="Harini Ganesan"
                            style={{ ...imageStyle, float: 'left', marginRight: '20px' }}
                        />
                        <div>
                            <p>I am Ms. Harini Ganesan, a young exponent Bharathanatyam dancer and founder of Sri Malligai Bharatyalaya, Kumbakonam under the discipline of Guru Sri Swaminathan Pillai, Pandanallur. I began my Bharathanatyam training at the age of 5 and spent my formative years learning under Sarogini, Kumbakonam.</p>
                            <p>I hold a Diploma in Nattuvangam and a Bachelor Degree in Fine Arts & Dance from Annamalai University, Chithambaram. I gathered knowledge about the dance form with various eminent Gurus.</p>
                            <p>I have performed in 30+ stage programs and also performed on the DD Podhigai Channel. I was the Super Senior of the Young Musician Association, Kumbakonam, and the President of the Fine Arts Club at the college level, where I choreographed for college students. I have organized, judged, choreographed, and performed related to the Indian Classical Art Form, Bharathanatyam.</p>
                            <p>I have performed in the Republic Day Parade Camp, Rashtrapati Bhavan, New Delhi, and also performed in front of the Prime Minister at the PM house. I have been awarded the titles "Nattiya Kalai Sudar", "Kuda Thai Kutty Padmini", and "Yuva Sri Kalai Bharathi" for my excellence in footwork. Additionally, I graduated with a Bachelor Degree in Electronics and Communication Engineering from Arasu Engineering College, Anna University.</p>
                        </div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        style={sectionStyle}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <img
                            src={image2}
                            alt="Dancing to Shiva"
                            style={{ ...imageStyle, float: 'right', marginLeft: '20px' }}
                        />
                        <div>
                            <p>"I'm thankful to dance at Kumbakonam, Maha shivaratri. Those are the moments where the dance reigns supreme. Dance is the only thing i know while dancing on this stage. Really this stage is mysterious. I can't separate myself from dance. It's a part of me and have a lot of joy and be free form myself.</p>
                            <p>Let me fully surrendered with Lord Shiva. Let the sound of your Damaru allow me to Surrender to you, let it free me of everything. Let me dance and know none other than you. Oh Shiva let my mind rest upon you. Only you!!! I bow down to that 'Shiva'. Om Nama Shivaya"</p>
                        </div>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        style={sectionStyle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <img
                            src={image3}
                            alt="Passion for Dance"
                            style={{ ...imageStyle, float: 'left', marginRight: '20px' }}
                        />
                        <div>
                            <p>"Dance is probably one of the most genuine ways to express your feelings. I can’t explain the feeling, but when that song comes on, I get lost in the music, in my moves, and I’m able to find that confident, energetic, and passionate Abinayas.</p>
                            <p>It’s really an honor when people come up to me and tell me how they enjoy watching at me, how they want me to teach them, how I’m good at dancing. I don’t want to come off bragging, but to be honest, it’s probably the one thing I’m proud of. Confidence doesn’t come easy to me, but when I’m dancing, I feel I lost myself at dance"</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default About;
