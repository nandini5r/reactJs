import React from "react";
import "./Section.scss";
import officeImg from "../../utils/IMAGE 1.png";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
const Section = () => {
  return (
    <div className="container1">
      <main>
        <h2>Welcome To Reqx Technology</h2>
        <h1>
          Boost Your Hiring and IT Solutions with REQX: Your Trusted Partner
        </h1>
        <p>
          At REQX, we streamline and optimize your recruitment journey. We
          recognize the challenges of talent acquisition and aim to facilitate
          seamless connections between top-notch candidates and leading
          employers.
        </p>
      </main>
      <div className="main-box">
        <div className="left-box">
          <img src={officeImg} alt="office" />
        </div>
        <div className="right-box">
          <h1>
            Hire Your Next Top Candidate with REQX Technology: Streamlined
            Recruitment Solutions
          </h1>

          <p>
            Ready to find your next top candidate? Look no further than REQX
            Technology. We've got your back! Our streamlined recruitment
            solutions take the stress out of hiring, making it easy to find and
            secure top talent. With our innovative technology and expert team,
            we'll connect you with the best candidates in your field, ensuring a
            smooth hiring journey from start to finish. Say goodbye to
            old-school recruitment headaches and hello to a smarter, more
            efficient way of hiring. Trust REQX Technology to help you assemble
            the dream team and elevate your business to new heights.
          </p>
          <div className="card-main">
            <div className="card">
              <div className="left">
                <EventNoteIcon className="icon" />
              </div>
              <div className="right">
                <p>Understand Your Needs</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <BeachAccessIcon className="icon" />
              </div>
              <div className="right">
                <p>Find the Perfect Candidate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
