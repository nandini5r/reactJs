import React from 'react'

import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-container">
      <img src={icon} alt='icon'></img>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;