import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      
      <div className="job">
        <h3>TikTok Ltd. (E-Commerce department)</h3>
        <p className="job-title">Back-end Developer Intern • Oct 2021 - Mar 2022</p>
        <ul>
          <li>Collaborated with cross-functional teams to deliver scalable internal tools</li>
          <li>Designed SQL and improved internal tools by optimising performance</li>
          <li>Built Go microservices on ByteDance's cloud for automated dispute resolution</li>
          <li>Maintained reconciliation data platform using Hive tables</li>
        </ul>
      </div>

      <div className="job">
        <h3>POP MART Chadstone</h3>
        <p className="job-title">Sales Associate (Retail) • Nov 2024 - Present</p>
        <ul>
          <li>Assist 100+ customers daily, tailoring recommendations</li>
          <li>Maintain accurate stock records, reducing discrepancies by 10%</li>
        </ul>
      </div>

      <div className="job">
        <h3>Hong Kong University of Science and Technology(HKUST) Research </h3>
        <p className="job-title">Research Program • Nov 2024 - Present</p>
        <ul>
          <li>Collaborated with peers and professors on an industry-focused AI research project.</li>
          <li>Contributed to data preprocessing, feature engineering, and model development using Python and libraries such as scikit-learn and TensorFlow.</li>
          <li>Participated in weekly meetings with academic and industry mentors to align technical progress with real-world objectives.</li>
          <li>Conducted exploratory data analysis to uncover insights and improve model performance.</li>
          <li>Co-authored project reports and presented findings to both technical and non-technical stakeholders.</li>
          <li>Strengthened analytical, communication, and teamwork skills in a fast-paced research environment.</li>
        </ul>
      </div>

    </section>
  );
};

export default Experience;