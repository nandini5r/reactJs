import React from "react";
import "./ContactBanner.scss";
import { motion } from 'framer-motion';
const ContactBanner = () => {
  return (
    <div>
      <motion.div 
        className="contact-us-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="banner-contact">
          <div className="overlay">
            <h1>Contact Us</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactBanner;


