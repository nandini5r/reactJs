import React from "react";
import "./Steps.scss";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
const Steps = () => {
  return (
    <div className="main-steps">
      <div className="head">
        <h3>HOW IT’S POSSIBLE</h3>
        <h1>Three Steps of Recruitment</h1>
        <p>
          Looking to streamline your hiring process? Look no further! With our
          simple three-step approach, finding the perfect candidates for your
          business has never been easier..
        </p>
      </div>
      <div className="container">
        <div className="box-1">
          <div className="cardm">
            <div className="badge">01</div>
            <div className="content">
              <div className="icon-box">
                <AddCommentIcon className="icon" />
              </div>
            </div>
            <div className="info">
              <h3>Initiation</h3>
              <p>We'll understand exactly what you're looking for.</p>
            </div>
          </div>
        
        </div>
        <div className="box-2">
          <div className="cardm">
            <div className="badge">02</div>
            <div className="content">
              <div className="icon-box">
                <NoteAddIcon className="icon" />
              </div>
            </div>
            <div className="info">
              <h3>Scheduling</h3>
              <p>
                Our expert recruiters will hunt down the perfect candidates for
                your business.
              </p>
            </div>
          </div>
         
        </div>
        <div className="box-3">
          <div className="cardm">
            <div className="badge">03</div>
            <div className="content">
              <div className="icon-box">
                <PersonAddAlt1Icon className="icon" />
              </div>
            </div>
            <div className="info">
              <h3>Contracts & Pay</h3>
              <p>We'll handle all the details for a stress-free process.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="wave"></div>
    </div>
  );
};

export default Steps;
