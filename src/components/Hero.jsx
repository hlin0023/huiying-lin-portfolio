import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Harrison(Huiying) Lin</h1>
        <h2> Software engineer | Data Engineer | Full Stack Developer | Machine Learning Engineer </h2>
        <p>Aspiring Machine Learning Engineer with strong foundations in Python, SQL, and cloud-based analytics.</p>
        <p>
          Building scalable full-stack applications with Java, Python, and C#.
          Passionate about system reliability and DevOps best practices.
        </p>
        <div className="contact-info">
          <p>📍 Melbourne, Australia</p>
          <p>📧 hlin0023@hotmail.com</p>
          <p>📱 0473 849 716</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/hlim0023" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/harrison-huiying-l-9b19b21b0" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;