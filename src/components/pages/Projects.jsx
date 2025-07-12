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

const projectData = [
  {
    image: "images/expense_tracker.png",
    title: "ExpensiFy",
    category: "Full Stack Web Application",
    link: "https://darjeeling-tourism-theta.vercel.app",
  },
  {
    image: "images/blood.jfif",
    title: "HemoCell",
    category: "Full Stack Web Application",
    link: "https://shopping-cart-black-pi.vercel.app",
  },
  {
    image: "images/dtours.avif",
    title: "DTours",
    category: "React Web Application",
    link: "https://darjeeling-tourism-theta.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subheading">Projects</span>
          <h2 className="title">My Projects</h2>
          <p className="description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              style={{ backgroundImage: `url('${project.image}')` }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="overlay"></div>
              <div className="project-content">
                <h3 className="project-title">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <span className="project-category">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
