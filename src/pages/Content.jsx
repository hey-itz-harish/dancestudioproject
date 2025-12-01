import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dance1 from '../assets/slideshow/dance1.png';
import dance2 from '../assets/slideshow/dance2.png';
import dance3 from '../assets/slideshow/dance3.png';
import dance4 from '../assets/slideshow/dance4.png';
import natraja2 from '../assets/slideshow/natraja2.png';

const galleryImages = [
    { src: dance1, alt: 'Dance Performance 1' },
    { src: dance2, alt: 'Dance Performance 2' },
    { src: dance3, alt: 'Dance Performance 3' },
    { src: dance4, alt: 'Dance Performance 4' },
    { src: natraja2, alt: 'Natraja Statue' },
];

const galleryVideos = [
    { src: 'https://assets.mixkit.co/videos/preview/mixkit-ballet-dancer-performing-a-pirouette-4058-large.mp4', alt: 'Ballet Pirouette' },
    { src: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-dancers-performing-choreography-4062-large.mp4', alt: 'Group Choreography' },
    { src: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-dancer-performing-moves-4066-large.mp4', alt: 'Dancer Silhouette' },
];

const Content = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' or 'videos'

    const currentItems = activeTab === 'photos' ? galleryImages : galleryVideos;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + currentItems.length) % currentItems.length);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0); // Reset index when switching tabs
    };

    return (
        <motion.div
            id={id}
            className="page content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container section">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}
                >
                    <span className="elevate-text">Our Gallery</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '40px' }}
                >
                    Explore our latest performances and behind-the-scenes moments.
                </motion.p>

                <div className="toggle-container">
                    <button
                        className={`toggle-button ${activeTab === 'photos' ? 'active' : ''}`}
                        onClick={() => handleTabChange('photos')}
                    >
                        Photos
                    </button>
                    <button
                        className={`toggle-button ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => handleTabChange('videos')}
                    >
                        Videos
                    </button>
                </div>

                <div className="gallery-container">
                    <button className="nav-button prev" onClick={prevSlide}>
                        &#10094;
                    </button>

                    <div className="gallery-wrapper">
                        <AnimatePresence mode="wait">
                            {activeTab === 'photos' ? (
                                <motion.img
                                    key={`photo-${currentIndex}`}
                                    src={currentItems[currentIndex].src}
                                    alt={currentItems[currentIndex].alt}
                                    className="gallery-image"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                />
                            ) : (
                                <motion.video
                                    key={`video-${currentIndex}`}
                                    src={currentItems[currentIndex].src}
                                    className="gallery-video"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    <button className="nav-button next" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Content;
