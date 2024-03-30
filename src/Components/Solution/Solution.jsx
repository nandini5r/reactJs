import React from "react";
import "./Solution.scss";
import { motion } from "framer-motion";
import backImg from "../../utils/DIRECT HIRING  ANIMATED IMAGE.png";
import ITimg from "../../utils/IT ANIMATED IMAGE.png";
import img3 from "../../utils/EXECUTIVE ANIMATED IMAGE.png";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Solution = () => {
  return (
    <div className="box_main">
      <div className="head">
        <h3>SOLUTIONS WE PROVIDE</h3>
        <h1>Streamlined Recruitment and IT Solutions: Your Path to Success</h1>
        <p>
          Welcome to our world of inspiring recruitment and IT solutions! We're
          here to make hiring a breeze and technology work for you. With our
          friendly team and straightforward approach, finding talent and
          boosting your tech game has never been easier. Say goodbye to
          headaches and hello to seamless solutions. Let's kickstart your
          success story together!.
        </p>
      </div>

      <div className="card-box-main">
        <motion.div
          className="cards-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="back-card"
            whileHover={{ scale: 1.1 }}
          >
            <img src={backImg} alt="back"></img>
          </motion.div>
          <motion.div
            className="front-card"
            whileHover={{ scale: 1.1 }}
          >
            <div>
              <MonetizationOnIcon className="icon" />
            </div>
            <div>
              <h2>Executive</h2>
            </div>
          </motion.div>

          <motion.div
            className="back-card2"
            whileHover={{ scale: 1.1 }}
          >
            <img src={ITimg} alt="back"></img>
          </motion.div>
          <motion.div
            className="front-card2"
            whileHover={{ scale: 1.1 }}
          >
            <div>
              <LaptopMacIcon className="icon" />
            </div>
            <div>
              <h2>IT</h2>
            </div>
          </motion.div>

          <motion.div
            className="back-card3"
            whileHover={{ scale: 1.1 }}
          >
            <img src={img3} alt="back"></img>
          </motion.div>
          <motion.div
            className="front-card3"
            whileHover={{ scale: 1.1 }}
          >
            <div>
              <PersonAddAlt1Icon className="icon" />
            </div>
            <div>
              <h2>Direct Hire</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
