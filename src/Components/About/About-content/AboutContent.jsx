import React from "react";
import "./AboutContent.scss";
import img1 from "../../../utils/IMAGE4 about.jpg";
import img2 from "../../../utils/IMAGE 3 about.jpg";

const AboutContent = () => {
  return (
    <div className="content-section">
      <div className="images-section">
        <div className="back"></div>
        <img src={img1} className="img1" alt="img1" />
      </div>
      <img src={img2} className="img2" alt="img2" />
      <div className="right-box">
        <h2>ABOUT OUR AGENCY</h2>
        <h1>Empowering Your Success: Discover Our Story</h1>
        <p>
          Welcome to Reqx, where your journey to success begins. Our story is
          one of passion, dedication, and relentless pursuit of excellence.
          Founded with the vision to empower businesses like yours, we have been
          on a mission to redefine the standards of success in the digital age.
        </p>
        <p>
          At Reqx, we believe in the power of collaboration and partnership. We
          are not just service providers; we are your trusted allies, dedicated
          to understanding your unique challenges, goals, and aspirations.
          Together, we embark on a journey of growth, leveraging cutting-edge
          strategies, and tailor-made solutions to propel your success to new
          heights.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
