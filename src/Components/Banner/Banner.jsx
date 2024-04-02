import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { motion } from "framer-motion";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the loading duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container-main ${isLoading ? "shimmer-effect" : ""}`}>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Streamlined Hiring and Cutting-Edge IT Solutions</h1>
        <p>
          "Welcome to REQX, your trusted partner for seamless hiring and
          top-notch IT solutions! At REQX, we specialize in talent acquisition
          and cutting-edge technology services. Whether you're seeking skilled
          professionals or IT expertise, we've got you covered. Our team
          streamlines recruitment processes and delivers tailored IT solutions.
          With a focus on excellence and customer satisfaction, we're here to
          help you achieve your business goals. Let's elevate your hiring
          experience and IT capabilities together!"
        </p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
