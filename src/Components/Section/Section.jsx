import React from "react";
import "./Section.scss";
import { motion } from 'framer-motion';
import officeImg from "../../utils/IMAGE 1.png";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
const Section = () => {
  return (
    <div className="container1">
    <main>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome To Reqx Technology
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Boost Your Hiring and IT Solutions with REQX: Your Trusted Partner
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        At REQX, we streamline and optimize your recruitment journey. We
        recognize the challenges of talent acquisition and aim to facilitate
        seamless connections between top-notch candidates and leading
        employers.
      </motion.p>
    </main>
    <div className="main-box">
      <div className="left-box">
        <motion.img
          src={officeImg}
          alt="office"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
      <div className="right-box">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Hire Your Next Top Candidate with REQX Technology: Streamlined
          Recruitment Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Ready to find your next top candidate? Look no further than REQX
          Technology. We've got your back! Our streamlined recruitment
          solutions take the stress out of hiring, making it easy to find and
          secure top talent. With our innovative technology and expert team,
          we'll connect you with the best candidates in your field, ensuring a
          smooth hiring journey from start to finish. Say goodbye to
          old-school recruitment headaches and hello to a smarter, more
          efficient way of hiring. Trust REQX Technology to help you assemble
          the dream team and elevate your business to new heights.
        </motion.p>
        <div className="card-main">
          <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="left">
              <EventNoteIcon className="icon" />
            </div>
            <div className="right">
              <p>Understand Your Needs</p>
            </div>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="left">
              <BeachAccessIcon className="icon" />
            </div>
            <div className="right">
              <p>Find the Perfect Candidate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Section;
