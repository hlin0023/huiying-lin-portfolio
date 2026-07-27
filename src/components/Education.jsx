import React from 'react';
import './Education.css';

const previewEducation = [
  {
    title: 'Master of Information Technology',
    text: 'University of Melbourne, focusing on AI, machine learning, and computer vision.',
  },
  {
    title: 'Bachelor of Computer Science',
    text: 'Monash University with distinction, covering systems, software engineering, and cloud computing.',
  },
];

const Education = ({ isExpanded, onToggle }) => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      {!isExpanded ? (
        <>
          <div className="key-points-grid">
            {previewEducation.map((item) => (
              <article className="key-point-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
          <div className="education-item">
            <h3>Master of Information Technology (Artificial Intelligence)</h3>
            <p className="institution">The University of Melbourne • 2025 - current</p>
            <div className="coursework">
              <h4>Relevant Coursework:</h4>
              <ul className="coursework-list">
                <li>Machine Learning</li>
                <li>Computer Vision</li>
              </ul>
            </div>
          </div>
      
          <div className="education-item">
            <h3>Bachelor of Computer Science (with Distinction)</h3>
            <p className="institution">Monash University • 2020 - 2024</p>
            <div className="coursework">
              <h4>Relevant Coursework:</h4>
              <ul className="coursework-list">
                <li>Distributed Systems</li>
                <li>Software Engineering</li>
                <li>Databases</li>
                <li>Algorithms</li>
                <li>Cloud Computing</li>
                <li>Full Stack Development</li>
              </ul>
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

export default Education;