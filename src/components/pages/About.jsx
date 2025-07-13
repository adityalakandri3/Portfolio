import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          {/* Image with fade-up and hover zoom */}
          <motion.div
            className="img-container"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="overlay"></div>
            <div
              className="img"
              style={{
                backgroundImage:
                  "url(images/IMG-20230429-WA0115.jpg)",
              }}
            ></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-container"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="about-content">
              <div className="heading">
                <span className="subheading">My Intro</span>
                <h2 className="title">About Me</h2>
                <p className="about-description">
                  Hi, I&apos;m a full-stack developer passionate about creating
                  responsive, user-friendly web apps. I work with HTML, CSS,
                  JavaScript, and React on the front-end, and Node.js, Express,
                  and MongoDB on the back-end to build fast, scalable solutions.
                  <br />
                  Check out my projects to see how I bring ideas to life—feel
                  free to reach out if you&apos;d like to collaborate!
                </p>

                <ul className="info-list">
                  <li className="info-item">
                    <span>Name:</span>{" "}
                    <span className="text-blue">Aditya Lakandri</span>
                  </li>
                  <li className="info-item">
                    <span>Date of birth:</span>{" "}
                    <span className="text-blue">July 13, 2000</span>
                  </li>
                  <li className="info-item">
                    <span>Address:</span>{" "}
                    <span className="text-blue">
                      Sonada, Darjeeling, West Bengal
                    </span>
                  </li>
                  <li className="info-item">
                    <span>Zip code:</span>{" "}
                    <span className="text-blue">734209</span>
                  </li>
                  <li className="info-item">
                    <span>Email:</span>{" "}
                    <span className="text-blue">
                      adityalakandri3@gmail.com
                    </span>
                  </li>
                  <li className="info-item">
                    <span>Phone:</span>{" "}
                    <span className="text-blue">+91-9832259271</span>
                  </li>
                </ul>
              </div>

              {/* Social Icons with links */}
              <div className="interests">
                {[
                  {
                    icon: <FaGithub />,
                    label: "Github",
                    link: "https://github.com/adityalakandri3",
                  },
                  {
                    icon: <FaLinkedin />,
                    label: "LinkedIn",
                    link: "https://linkedin.com/in/aditya-lakandri-1270b4192",
                  },
                  {
                    icon: <FaFacebook />,
                    label: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100006054464870",
                  },
                  {
                    icon: <FaInstagram />,
                    label: "Instagram",
                    link: "https://www.instagram.com/__.aditya__13/",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interest"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="icon">
                      <span className="icon-details">{item.icon}</span>
                    </div>
                    <div className="interest-text">{item.label}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
