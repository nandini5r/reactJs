import React from "react";
import "./ContactBanner.scss";
import { motion } from "framer-motion";

const shimmerAnimation = {
  shimmer: {
    backgroundSize: "400% 100%",
    backgroundPosition: "100% 0",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const ContactBanner = () => {
  return (
    <div>
      <div className="contact-us-container">
        <motion.div
          className="banner-contact"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </div>
      <div className="shimmer" variants={shimmerAnimation} animate="shimmer" />
    </div>
  );
};

export default ContactBanner;
// <div className="overlay">
// <h1>Contact Us</h1>
// </div>
