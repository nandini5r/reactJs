import React from "react";
import "./ContactForm.scss";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useRef } from "react";
const ContactForm = () => {
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
            console.log(result.text, "nknkn");

            toast.success("Form submitted successfully!", {});
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Are you ready to enhance your team with exceptional IT talent or
          explore exciting career opportunities? We're eager to connect with
          you! Our dedicated team is standing by, ready to assist you. Don't
          hesitate to reach out using the contact information provided below, or
          simply fill out the form to send us a message. We look forward to
          hearing from you!
        </p>
        <div className="contact-info">
          <div className="contact-form">
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
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
