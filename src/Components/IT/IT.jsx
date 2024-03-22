import React from "react";
import "./IT.scss";
import upimg from "../../utils/software_shutterstock_1290773869.jpg";
import bottomimg from "../../utils/social-network-connection-avatar-icon-vector.jpg";
const IT = () => {
  return (
    <div className="main-box">
      <div className="box">
        <div className="left-box">
          <div className="up-img">
            <img src={upimg} alt="upper"></img>
          </div>
          <div className="bottom-img">
            <img src={bottomimg} alt="bottom"></img>
          </div>
        </div>
        <div className="right-box">
          <h2>ABOUT OUR AGENCY</h2>
          <h1>
            Staffing Partners: Your Go-To for Reliable & Cost-Efficient
            Recruitment and IT Solutions
          </h1>
          <p>
            "Hey there! Are you on the hunt for reliable and budget-friendly
            recruitment and IT solutions? Well, look no further because you've
            landed at Staffing Partners! We've been in the game for ages,
            assisting businesses just like yours in finding top-notch talent
            without breaking the bank. Our dedicated team is here to support you
            every step of the way, ensuring a smooth and hassle-free process
            from start to finish. Say goodbye to the headaches of costly
            recruitment and IT services, and say hello to a trusted partner.
            Let's join forces and begin building your dream team today!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default IT;
