import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_16xgdol',     // 👉 replace with your actual Service ID
      'template_4blkpyg',    // 👉 replace with your actual Template ID
      form.current,
      'esNcIXqF9hZPQ_xB7'  //public key 
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Heading */}
        <motion.div
          className="contact-row heading-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-col heading-col">
            <span className="subheading">Contact us</span>
            <h2 className="heading">Have a Project?</h2>
            <p className="description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </motion.div>

        {/* Form and Info */}
        <div className="contact-form-row">
          {/* Contact Form */}
          <motion.div
            className="contact-form-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="contact-row">
                <div className="contact-col">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="contact-col">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="contact-col">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="contact-col">
                  <textarea
                    name="message"
                    className="form-control"
                    cols="30"
                    rows="7"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="contact-col">
                  <input
                    type="submit"
                    className="contact-btn"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaMapMarkerAlt />,
                label: "Address:",
                value: "Sonada, Darjeeling, West Bengal",
              },
              {
                icon: <FaPhone />,
                label: "Phone:",
                value: <a href="tel://9832259271">+91-9832259271</a>,
              },
              {
                icon: <FaEnvelope />,
                label: "Email:",
                value: (
                  <a href="mailto:adityalakandri3@gmail.com">
                    adityalakandri3@gmail.com
                  </a>
                ),
              },
            ].map((item, i) => (
              <motion.div
                className="contact-detail-item"
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <p>
                    <span>{item.label}</span>
                    <br />
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
