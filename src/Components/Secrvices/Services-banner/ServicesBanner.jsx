import React from 'react'
import './ServicesBanner.scss'
import { motion } from 'framer-motion';
const ServicesBanner = () => {
  return (
    <div className="services-container">
    <motion.div 
      className="banner-service"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="overlay">
        <h1>Our Services</h1>
      </div>
    </motion.div>
  </div>
  )
}

export default ServicesBanner