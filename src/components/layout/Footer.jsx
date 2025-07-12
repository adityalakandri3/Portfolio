import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section 1 */}
          <motion.div className="footer-section" custom={1} variants={fadeUp}>
            <h2 className="footer-heading">Lets talk about</h2>
            <p className="footer-description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a href="#" className="footer-btn">
              Learn more
            </a>
          </motion.div>

          {/* Section 2 - Links (no hover added here) */}
          <motion.div className="footer-section" custom={2} variants={fadeUp}>
            <h2 className="footer-heading">Links</h2>
            <ul className="footer-links">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a href="#">
                      <FaChevronRight className="arrow-icon" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Section 3 - Contact Info */}
          <motion.div className="footer-section" custom={3} variants={fadeUp}>
            <h2 className="footer-heading">Have Questions?</h2>
            <ul className="footer-contact-info">
              <li>
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <span className="text">
                  Sonada, Darjeeling, West Bengal
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaPhone />
                </span>
                <span className="text">+91-9832259271</span>
              </li>
              <li>
                <span className="icon">
                  <FaEnvelope />
                </span>
                <span className="text">adityalakandri3@gmail.com</span>
              </li>
            </ul>

            {/* Social Icons (existing hover retained, no new hover added) */}
            <div className="footer-social-media">
              {[
                {
                  icon: <FaLinkedin />,
                  link:
                    "https://www.linkedin.com/in/aditya-lakandri-1270b4192/",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/profile.php?id=100006054464870",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/__.aditya__13/",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/9832259271",
                },
              ].map((item, i) => (
                <a key={i} href={item.link} className="social-icon">
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="footer-bottom-text">
            &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
