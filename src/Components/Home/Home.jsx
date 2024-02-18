import  { useState } from "react";
import React from 'react'
import * as Yup from "yup";
import { toast } from 'react-toastify';
import {  ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../utils/newLogo.jpg";
import service1 from "../../utils/community-black-and-white-teamwork-people-passing-puzzle-pieces-to-each-other-1.png";
import service2 from "../../utils/shine-support-operator-helps-to-solve-the-problem-1.png";
import "./Home.scss";
import { useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import market from "../../utils/market.jpeg";
import headerImg from "../../utils/headerImg.jpeg"
import it from "../../utils/it.jpeg"
import nonit from "../../utils/non-it.jpeg"
import webapp from "../../utils/web-app.jpeg"
import rpo from "../../utils/rpo.jpeg"
const Test = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim() 
      .required("Name is required")
      .min(2, "Name must have at least two characters")
      .matches(/^\S.*\S$/, "Leading or trailing spaces are not allowed"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Invalid phone number (only digits allowed)")
      .min(10),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .max(500, "Message is too long"),
  });

  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      emailjs
        .sendForm(
          "service_2svmzfs",
          "template_s5qqcnl",
          form.current,
          "VVXs348zuOIj9TWXL"
        )
        .then(
          (result) => {
            console.log(result.text,"nknkn");
           
            toast.success("Form submitted successfully!", {
            });
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <div className="landing-page">
      <div className={`main-header ${showMenu ? "show-menu" : ""}`}>
        <div className="logo">
         <img src={logo} alt="logo"></img>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776; 
        </div>
        <nav className={`nav-links ${showMenu ? "show-menu" : ""}`}>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-content">
          <h1>ReqX Technologies</h1>
          <p>
            Leading The Change In The Corporate World. We’re the best serving in
            the sector of IT and Non-IT recruitment
          </p>
          <p>
            At REQX, we simplify and optimize your hiring process. We understand
            finding the right talent can be difficult and time-consuming, so
            we're here to connect exceptional candidates with top employers.
          </p>
          <a href="#services" className="cta-button">
            Explore Our Services
          </a>
        </div>
        <div className="hero-image">
          <img src={headerImg} alt="Hero Background" />
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service-image">
            <img src={service2} alt="about"></img>
          </div>
          <div className="service-cards">
            <div className="service-card">
              <img
              src={it}
                alt="Service 1"
              />
              <h3>Technology & Engineering</h3>
              <p>Hire the best IT talent </p>
            </div>
            <div className="service-card">
              <img
                src={nonit}
                alt="Service 2"
              />
              <h3>Non-IT / BPO </h3>
              <p>Effective and Selected </p>

            </div>
          
        
            <div className="service-card">
            <img
              src= {rpo}
              alt="Service 1"
            />
            <h3>RPO</h3>
            <p>Optimizing talent acquisition with strategic staffing across industries to meet your needs</p>

          </div>
          <div className="service-card">
          <img
            src= {market}
            alt="Service 1"
          />
          <h3>Marketing 360</h3>
          <p>Growth for people who want more </p>

        </div>
            <div className="service-card">
            <img
              src= {webapp}
              alt="Service 1"
            />
            <h3>Web/Application Development</h3>
            <p>Bridging the Gap Between Ideas and Reality</p>

          </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            We are not just another recruitment agency. We are the connectors,
            the builders of dreams.
          </p>

          <p>
            We bridge the gap between talented individuals and ambitious
            companies, in the bustling worlds of both IT and non-IT.
          </p>
          <p>
            Our vision.
            <br></br>
            <br></br>
            To empower people to find their perfect professional fit, and to
            help companies build thriving teams that ignite innovation and drive
            success.
            <br></br>
            <br></br>

            Our mission is simple, yet powerful.
            <br></br>
            <br></br>

            For you, the candidate.
            <br></br>
            <br></br>

            We become your career champions. We listen to your aspirations,
            understand your skills, and translate your potential into
            opportunities that spark your passion. We navigate the complex job
            market, providing expert guidance and support every step of the way,
            from resume optimization to interview preparation. We are your
            advocates, your cheerleaders, and your trusted partners in achieving
            your career goals.
            <br></br>
            <br></br>
             For you, the company.
            <br></br>
            <br></br>

            We become your talent architects. We understand the unique needs and
            challenges of your business, and we identify the perfect individuals
            who will not only fill a role, but become valuable assets to your
            team. We utilize cutting-edge recruitment strategies, leveraging
            technology and our deep industry knowledge to attract and assess top
            talent. We don't just find employees, we find collaborators,
            innovators, and future leaders who will help your company reach new
            height.
            <br></br>
            <br></br>

            We are a team of passionate, experienced professionals who are as
            dedicated to your success as you are. We are not robots churning out
            resumes; we are human connectors who build genuine relationships and
            understand the nuances of both the candidate and the company
            perspective. We are tech-savvy, market-aware, and constantly
            evolving to stay ahead of the curve in the ever-changing recruitment
            landscape. Here's what sets us apart
          </p>
          <a href="#contact" className="cta-button">
            Get to Know Us
          </a>
        </div>
        <div className="about-us-image">
          <img src={service1} alt="about"></img>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-content">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <img
                src="data:image/jpeg;base64,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"
                alt="Client 1"
              />
              <p>
                "Exceptional service! They found the perfect candidate for our
                team. Their expertise in IT recruitment is unmatched."
              </p>
            </div>
            <div className="testimonial-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuBB5mAyioTsrLcN9jv0K0Zd-IGnGQ_Q0Tw&usqp=CAU"
                alt="Client 2"
              />
              <p>
                "Efficient and reliable. I highly recommend their recruitment
                services. They provided us with highly skilled professionals."
              </p>
            </div>
            <div className="testimonial-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLGxl_vhnyFMq-ntnS-su_fSkcXZ7szMttQ&usqp=CAU"
                alt="Client 3"
              />
              <p>
                "Working with them was a breeze. They understand the IT
                industry, and their dedication to finding the right talent is
                commendable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            Ready to elevate your team with top-notch IT talent or explore
            exciting career opportunities? We would love to hear from you. Our
            dedicated team is always ready to assist you. Feel free to reach out
            through the contact details below or use the form to send us a
            message.
          </p>
          <div className="contact-info">
            {/* ... (Previous code remains unchanged) */}

            {/* Contact Form */}
            <div className="contact-form" id="contact">
              <form onSubmit={formik.handleSubmit} ref={form}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="error">{formik.errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="error">{formik.errors.phone}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="error">{formik.errors.message}</div>
                  )}
                </div>
                <div className="button">
                  <button type="submit">Submit</button>
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
            <h2>Contact</h2>
            <p>Address : New Delhi,India</p>
            <p>Email : info@reqxtechnologies.com</p>
            <p>Phone : +91 9643030859</p>
            </div>
            <div className="footer-links">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
                <Link to = "https://in.linkedin.com/company/reqxtech?trk=public_profile_topcard-current-company">

                <LinkedInIcon className="linkIcon"/>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Test;
