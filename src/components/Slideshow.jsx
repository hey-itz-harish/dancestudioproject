import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dance1 from '../assets/slideshow/dance1.png';
import dance2 from '../assets/slideshow/dance2.png';
import dance3 from '../assets/slideshow/dance3.png';
import dance4 from '../assets/slideshow/dance4.png';

const images = [
    { src: dance1, alt: 'Dance 1' },
    { src: dance2, alt: 'Dance 2' },
    { src: dance3, alt: 'Dance 3' },
    { src: dance4, alt: 'Dance4' },
];

const Slideshow = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slideshow-container">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={index}
                    src={images[index].src}
                    alt={images[index].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="slideshow-image"
                />
            </AnimatePresence>
            <div className="overlay"></div>
        </div>
    );
};

export default Slideshow;
