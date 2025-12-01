import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Dance Studio Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
