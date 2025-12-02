import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      
      <div className="job">
        <h3>Blackhall & Pearl </h3>
        <p className="job-title"> Software Engineer (Part-time) • July 2025 - Present </p>
        <ul>
          <li>Developed and maintained full-stack features using <strong>React</strong> and <strong>TypeScript</strong> for an AI-powered assistant, enhancing user experience and operational efficiency.</li>
          <li>Designed and consumed <strong>GraphQL APIs</strong> with Apollo Client, streamlining data fetching and reducing over-fetching.</li>
          <li>Designed and maintained backend features and APIs for a production web app (<strong>Next.js</strong>, Supabase, Sanity CMS).</li>
          <li>Collaborated on CI pipelines and code reviews in Bitbucket, improving deployment reliability.</li>
          <li>Built data visualisation dashboards and internal tools to support operational insights.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Monash University  </h3>
        <p className="job-title"> IT Support Officer • October 2025 – Present </p>
        <ul>
          <li>Provide first-line technical support to faculty and students, troubleshooting hardware, software, and network issues across multiple systems.</li>
          <li>Maintain and update internal IT documentation and process automation tools to streamline request handling.</li>
          <li>Collaborate with system administrators to deploy and test internal software tools used by staff and labs.</li>
        </ul>
      </div>

      <div className="job">
        <h3>TikTok Ltd. (E-Commerce department)</h3>
        <p className="job-title">Back-end Developer Intern • Oct 2021 - Mar 2022</p>
        <ul>
          <li>Collaborated with cross-functional teams to deliver scalable internal tools</li>
          <li>Designed <strong>SQL</strong> and improved internal tools by optimising performance</li>
          <li>Built <strong>Go microservices</strong> on ByteDance's cloud for automated dispute resolution</li>
          <li>Maintained reconciliation data platform using <strong>Hive</strong> tables</li>
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
          <li>Collaborated with peers and professors on an industry-focused <strong>AI research project</strong>.</li>
          <li>Contributed to data preprocessing, feature engineering, and model development using <strong>Python</strong> and libraries such as <strong>scikit-learn</strong> and <strong>TensorFlow</strong>.</li>
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