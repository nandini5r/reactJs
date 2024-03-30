import React from 'react'
import './AboutBanner.scss'
import { motion } from 'framer-motion';
const AboutBanner = () => {
  return (
    <div className="about-us-container">
    <motion.div 
      className="banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="overlay">
        <h1>About Us</h1>
      </div>
    </motion.div>
  </div>
  )
}

export default AboutBanner