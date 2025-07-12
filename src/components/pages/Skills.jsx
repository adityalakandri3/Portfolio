import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 80 },
  { name: "JavaScript", value: 80 },
  { name: "ReactJS", value: 80 },
  { name: "NodeJS", value: 85 },
  { name: "MongoDb", value: 80 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills-section">
      <div className="skills-container">
        <div className="skills-header text-center">
          <span className="skills-subheading">Skills</span>
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="skills-cards">
          {skills.map((skill, index) => (
            <motion.div
              className="skills-card"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="card-title">{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.value}%` }}
                >
                  <span className="progress-text">{skill.value}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
