import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section1 from '../pages/Section1';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Education from '../pages/Education';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Section1 />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Root;
