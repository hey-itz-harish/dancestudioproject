import React from 'react';
import { motion } from 'framer-motion';

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
                    className="responsive-h1"
                >
                    <span className="elevate-text">About Us</span>
                </motion.h1>
                <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {[1].map((item) => (
                        <motion.div
                            key={item}
                            style={{
                                background: 'rgba(26, 26, 26, 0.34)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: 'none',
                                backdropFilter: 'blur(5px)',
                                textAlign: 'left'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + item * 0.1 }}
                        >
                            <p>Sri Malligai Bharathalaya is the platform to teach children of all the ages and adults of all levels. Also, we have an ability to work with extremely shy peoples, and together with their support. we have been able to get them to participate in all programmes. Train, exercise and attend dance classes to maintain high levels of technical proficiency, physical ability and physical fitness. Adult classes are structured to be enjoyable & challanging with the goal of promoting a fit, injury free, healthy lifestyle while learning an ancient artform. The class suitable for all adults irrespective of prior Bharatanatyam training.</p>
                            <p>In Malligai Bharathalaya every dancer learns from every other dancer. Each dancer works at his/her own skill levels and dancers will encourage each other. You are here to mould and help yourself to become a better dancer and find joy in dancing.</p>
                            <p>Classes are conducted for all ages in Pandanallur style. Online Bharathanatyam classes, special choreography (Solo/Group) & private classes are offered. Students who have prior exposure to Bharathanatyam will be placed in respective levels after a set of evaluations.</p>
                            <p>Classes include theory sessions in which the Hastas, Karnas, Margam, Grade exam syllabus and various other technical aspects of Bharathantayam are taught. The structure is designed in a methodical way that prepares the dancer for Salangai Pooja and Arangetram.</p>
                            <p>Enrolling students in the following categories:<br></br>Level I - Beginner<br></br>Level II - Advanced<br></br>Level III - Professional<br></br>Classes are currently conducted in Kumbakonam. Duration of the class increases as one progress through the levels. Additional classes might be scheduled if a dancer is preparing for a Salangai Pooja or Arangetram or any performance.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;
