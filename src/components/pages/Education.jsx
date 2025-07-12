import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Education</span>
          <h2 className="title">My Education</h2>
          <p className="description">
            A quick overview of my academic background and certifications.
          </p>
        </div>

        <div className="education-grid">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="education-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="degree">
                {i === 0 ? "Bachelor of Computer Technology" : "Higher Secondary School"}
              </h3>
              <p className="institution">
                {i === 0 ? "Lovely Professional University" : "St. Roberts High School"}
              </p>
              <span className="year">{i === 0 ? "2019 - 2023" : "2016 - 2018"}</span>
              <p className="edu-description">
                {i === 0
                  ? "Studied data structures, web development, and programming fundamentals and also participated in cultural and social activities. "
                  : "Focused on PCM (Physics, Chemistry, Mathematics) and participated in cultural events."}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="certification-section">
          <h3 className="cert-heading">Certifications</h3>
          <ul className="cert-list">
            {[
              { name: "JavaScript - CipherSchools", year: "2024" },
              { name: "Web Development - CipherSchools", year: "2024" },
              { name: "Programming Using C++ - CipherSchools", year: "2022" },
            ].map((cert, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="cert-name">{cert.name}</span>
                <span className="cert-year">{cert.year}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
