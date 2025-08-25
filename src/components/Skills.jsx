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
          <h3>ML & Data Science</h3>
          <p>Scikit-learn, TensorFlow, Pandas, NumPy, Jupyter, Power BI</p>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <p>MySQL, MS SQL Server, MongoDB, NoSQL (Firebase)</p>
        </div>
        <div className="skill-category">
          <h3>Cloud & DevOps</h3>
          <p>Azure, AWS (Lambda, EC2, S3), Volcano Engine(TikTok), CI/CD pipelines, Git</p>
        </div>
        <div className="skill-category">
          <h3>Web & APIs</h3>
          <p>RESTful API design, React, GraphQL, JSON, HTML5/CSS3</p>
        </div>
        <div className="skill-category">
          <h3>Other Tools</h3>
          <p>Hive, Tableau, Agile/Scrum, Linux/Unix familiarity</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;