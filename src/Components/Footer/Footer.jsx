import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero__title">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Contact</h2>
              <p>Address : New Delhi,India</p>
              <p>Email : info@reqxtechnologies.com</p>
              <p>Phone : +91 9650954146</p>
            </div>
            <div className="footer-links">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul>
                <li>
                  <FacebookIcon />
                </li>

                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <XIcon />
                </li>
                <li>
                  <Link to="https://in.linkedin.com/company/reqxtech?trk=public_profile_topcard-current-company">
                    <LinkedInIcon className="linkIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
    </div>
  );
};

export default Footer;
