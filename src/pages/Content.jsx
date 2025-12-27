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

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const handleDragEnd = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            nextSlide();
        } else if (swipe > swipeConfidenceThreshold) {
            prevSlide();
        }
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
                    className="responsive-h1"
                >
                    <span className="elevate-text">Our Gallery</span>
                </motion.h1>
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

                <div
                    className="gallery-container"
                >
                    <div className="gallery-wrapper">
                        <AnimatePresence mode="wait">
                            {activeTab === 'photos' ? (
                                <motion.img
                                    key={`photo-${currentIndex}`}
                                    src={currentItems[currentIndex].src}
                                    alt={currentItems[currentIndex].alt}
                                    className="gallery-image"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={handleDragEnd}
                                />
                            ) : (
                                <motion.div
                                    key={`video-container-${currentIndex}`}
                                    className="video-swipe-container"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={handleDragEnd}
                                    style={{ width: '100%', height: '100%', touchAction: 'none' }}
                                >
                                    <video
                                        src={currentItems[currentIndex].src}
                                        className="gallery-video"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        style={{ pointerEvents: 'auto' }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="dot-indicators">
                        {currentItems.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to ${activeTab === 'photos' ? 'photo' : 'video'} ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Content;
