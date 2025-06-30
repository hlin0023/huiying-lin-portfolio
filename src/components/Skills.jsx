import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages & Frameworks</h3>
          <p>Java, Python, C#, SQL, TypeScript, JavaScript, Swift</p>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <p>MySQL, MS SQL Server, MongoDB, NoSQL (Firebase)</p>
        </div>
        <div className="skill-category">
          <h3>Cloud & DevOps</h3>
          <p>AWS (Lambda, EC2, S3), Volcano Engine, CI/CD pipelines</p>
        </div>
        <div className="skill-category">
          <h3>Web & APIs</h3>
          <p>RESTful API design, GraphQL, JSON, HTML5/CSS3</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;