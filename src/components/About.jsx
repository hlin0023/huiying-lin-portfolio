import React from 'react';
import './About.css';

const previewPoints = [
  {
    title: 'AI and software delivery',
    text: 'Builds production-ready systems that combine machine learning with practical application design.',
  },
  {
    title: 'Data and cloud focus',
    text: 'Works across Python, SQL, Azure, Spark, and analytics workflows.',
  },
  {
    title: 'LLM and NLP interest',
    text: 'Explores retrieval, language models, and applied AI tools for real products.',
  },
];

const About = ({ isExpanded, onToggle }) => {
  return (
    <section className="about" id="about">
      <h2>Professional Summary</h2>
      {!isExpanded ? (
        <>
          <div className="key-points-grid">
            {previewPoints.map((point) => (
              <article className="key-point-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <div className="section-actions">
            <button type="button" className="section-toggle" onClick={onToggle} aria-expanded={isExpanded}>
              View more
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            AI Engineer with professional experience in software engineering and cloud data engineering, building scalable applications and reliable data platforms. Strong background in machine learning, NLP, statistical modelling, and data analytics using Python, SQL, Azure, Apache Spark, and TensorFlow. Passionate about developing LLM-powered applications, autonomous AI agents, and production-ready machine learning systems that solve real-world problems.
          </p>
          <div className="section-actions">
            <button type="button" className="section-toggle" onClick={onToggle} aria-expanded={isExpanded}>
              Show less
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default About;