import React from 'react'
import './Tech.scss'
import officeImg from "../../utils/IMAGE 4.png";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LockIcon from '@mui/icons-material/Lock';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
const Tech = () => {
  return (
    <div className="container1">

    <div className="main-box">
      <div className="left-box">
        <img src={officeImg} alt="office"/>
      </div>
      <div className="right-box">
          <h3>INFORMATION TECHNOLOGY</h3>
        <h1>Maximizing Efficiency: Streamlining Processes with IT Solutions</h1>
        <p>
        In today's fast-paced world, leveraging technology is key to staying ahead. At our company, we're dedicated to optimizing your operations with our cutting-edge IT solutions. Here's how we can help:
        </p>
      
     
        <div className="card-main">
        <div className="card">
        <div className="left">
          <EventNoteIcon className="icon" />
        </div>
        <div className="right">
          <p>Seamless Integration</p>
        </div>
      </div>
      <div className="card">
      <div className="left">
        <LockIcon className="icon"/>
      </div>
      <div className="right">
        <p>Enhanced Security </p>
      </div>
    </div>
    <div className="card">
    <div className="left">
      <LaptopMacIcon className="icon"/>
    </div>
    <div className="right">
      <p>Scalable Solutions</p>
    </div>
  </div>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Tech