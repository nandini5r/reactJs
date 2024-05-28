import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { motion } from "framer-motion";
import DialogBox from "../Dialog/Dialog";
const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [hasDialogDisplayed, setHasDialogDisplayed] = useState(false);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('dialogDisplayed', 'true');
  };

  const handleConfirm = () => {
    handleClose();
  };
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    const intervalId = setInterval(clearLocalStorage, 2* 60 * 60 * 1000); // 2 hours

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {    const dialogDisplayed = localStorage.getItem('dialogDisplayed');
    if (!hasDialogDisplayed && !dialogDisplayed) {
      setOpen(true);
      setHasDialogDisplayed(true);
    }
  }, [hasDialogDisplayed]);

  const dialogActions = [
    { label: 'Close', color: 'secondary', handler: handleConfirm },
  ];
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
      <DialogBox
      open={open}
      handleClose={handleClose}
      title='Website Under Maintenance'
      content="Our website is currently undergoing scheduled maintenance to improve your experience. During this period, you may still access and use the site as usual. We apologize for any inconvenience and appreciate your patience. Thank you for understanding! "
      actions={dialogActions}
    />
    </div>
  );
};

export default Banner;
