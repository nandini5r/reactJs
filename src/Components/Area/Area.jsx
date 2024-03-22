import React from "react";
import "./Area.scss";
import { useState } from "react";
import img3 from "../../utils/corporate-management-strategy-solution-branding-concept.jpg";
import img2 from "../../utils/it.jpeg";
import img1 from '../../utils/hand-button-man-multimedia-mail.jpg'
import img5 from '../../utils/scott-graham-OQMZwNd3ThU-unsplash.jpg'
import img4 from '../../utils/n0X9DUy5e-C02qm7iKMcCP9BDPV3uXMAddYsRRGN7F8.jpg'
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Area = () => {
  const images = {
    Title1: img1,
    Title2: img2,
    Title3: img3,
    Title4: img4,
    Title5: img5,
  };

  const [selectedTitle, setSelectedTitle] = useState("Title1");

  const handleClick = (title) => {
    setSelectedTitle(title);
  };
  return (
    <div className="App">
      <div className="titles">
        <h3>OUR SERVICE AREAS</h3>
        <div className="tag">
          <PersonAddAlt1Icon className="icon" />{" "}
          <h2 onClick={() => handleClick("Title1")}>Marketing 360</h2>
        </div>
        <div className="tag">
          <LaptopMacIcon className="icon" />
          <h2 onClick={() => handleClick("Title2")}>
            Web/Application Development
          </h2>
        </div>
        <div className="tag">
          <MonetizationOnIcon className="icon" />
          <h2 onClick={() => handleClick("Title3")}>RPO</h2>
        </div>
        <div className="tag">
          <LaptopMacIcon className="icon" />
          <h2 onClick={() => handleClick("Title4")}>Software/IT</h2>
        </div>
        <div className="tag">
          <MonetizationOnIcon className="icon" />
          <h2 onClick={() => handleClick("Title5")}>Non-IT / BPO</h2>
        </div>
      </div>
      <div className="image-container">
        {selectedTitle && (
          <img src={images[selectedTitle]} alt={selectedTitle} />
        )}
      </div>
    </div>
  );
};

export default Area;
