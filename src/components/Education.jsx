import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

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
    </section>
  );
};

export default Education;