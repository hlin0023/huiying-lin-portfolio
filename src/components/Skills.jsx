import React from 'react';
import './Skills.css';

const previewGroups = [
  {
    title: 'Languages',
    text: 'Java, Python, TypeScript, SQL, C#, JavaScript, Swift',
  },
  {
    title: 'Machine learning',
    text: 'TensorFlow, scikit-learn, Pandas, NumPy, Jupyter, Power BI',
  },
  {
    title: 'Cloud and delivery',
    text: 'Azure, AWS, Git, CI/CD pipelines, React, GraphQL',
  },
];

const Skills = ({ isExpanded, onToggle }) => {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      {!isExpanded ? (
        <>
          <div className="key-points-grid">
            {previewGroups.map((group) => (
              <article className="key-point-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
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
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages & Frameworks</h3>
              <p><strong>Java</strong>, <strong>Python</strong>, C#, SQL, <strong>TypeScript</strong>, JavaScript, Swift</p>
            </div>
            <div className="skill-category">
              <h3>ML & Data Science</h3>
              <p><strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, Pandas, NumPy, Jupyter, Power BI</p>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <p><strong>MySQL</strong>, MS SQL Server, <strong>MongoDB</strong>, NoSQL (Firebase)</p>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <p><strong>Azure</strong>, <strong>AWS</strong> (Lambda, EC2, S3), Volcano Engine(TikTok), CI/CD pipelines, <strong>Git</strong></p>
            </div>
            <div className="skill-category">
              <h3>Web & APIs</h3>
              <p><strong>RESTful API</strong> design, <strong>React</strong>, <strong>GraphQL</strong>, JSON, HTML5/CSS3</p>
            </div>
            <div className="skill-category">
              <h3>Other Tools</h3>
              <p>Hive, Tableau, <strong>Agile/Scrum</strong>, Linux/Unix familiarity</p>
            </div>
          </div>
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

export default Skills;