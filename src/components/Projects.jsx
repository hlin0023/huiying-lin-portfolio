import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Software Projects</h2>
      <div className="project">
        <h3>Hotel Reservation System</h3>
        <div className="contact-links">
          <a href="https://hlin0023.github.io/hotel-booking-project/" target="_blank" rel="noopener noreferrer">access here</a>
          <a> </a>
          <a href="https://github.com/hlin0023/hotel-booking-project/tree/main" target="_blank" rel="noopener noreferrer">code</a>
          <a> </a>
          <a href="https://github.com/hlin0023/Hotel-Booking-System/tree/main/python%20version%20code" target="_blank" rel="noopener noreferrer">python</a>
          <a> </a>
          <a href="https://github.com/hlin0023/Hotel-Booking-System" target="_blank" rel="noopener noreferrer">C#</a>
        </div>
        <p className="tech">C# / Python • Feburary 2024 - March 2024</p>
        <ul>
          <li>Implemented in React js</li>
          <li>Engineered modular, object-oriented backend solution</li>
          <li>Implemented date-range conflict algorithm to prevent overbooking</li>
          <li>version for python and C++ version also implemented</li>
        </ul>
      </div>

      <div className="project">
        <h3>Tripo | IOS Developer</h3>
        <a href="https://www.figma.com/proto/dylExBP52fIbJAFc6rHGTy/Untitled?node-id=1-2&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">App figma show</a>
        <a> </a>
        <a href="https://https://github.com/hlin0023/IosTravelApp.com/hlin0023/hotel-booking-project/tree/main" target="_blank" rel="noopener noreferrer">code</a>
        <p className="tech">Swift / Figma • March 2023 - Jul 2023</p>
        <ul>
          <li>Developed CI/CD pipeline for deployment</li>
          <li>Integrated APIs for real-time geolocation and currency conversion</li>
        </ul>
      </div>

      <div className="project">
        <h3>Website Game</h3>
        <a href="https://github.com/hlim0023/frogger/tree/main" target="_blank" rel="noopener noreferrer">code</a>
        <p className="tech">TypeScript • March 2023 </p>
        <ul>
          <li>Leveraged DOM manipulation and reactive programming to manage keyboard input, collisions, animations, and level progression.</li>
          <li>Built modular components across the stack to support clean game architecture and future enhancements.</li>
          <li>Demonstrated strong problem-solving, attention to detail, and passion for creating engaging user experiences using JavaScript, HTML5, and CSS3.</li>
        </ul>
      </div>

      <div className="project">
        <h3>Applied Machine Learning Algorithms</h3>
        <a href="https://github.com/hlin0023/machine-learning-algorithms-" target="_blank" rel="noopener noreferrer">code</a>
        <p className="tech">Python • April 2025 </p>
        <ul>
          <li>Implemented and evaluated classifiers (Decision Tree, Naive Bayes, Logistic Regression) on real datasets.</li>
          <li>Applied Naive Bayes to discrete data and derived MLE for exponential distributions.</li>
          <li>Trained linear regression models to study generalization and model complexity using MSE.</li>

        </ul>
      </div>

      <div className="project">
        <h3>Amazon Video Games Dataset Analysis(Data Analysis) </h3>
        <a href="https://github.com/hlin0023/snap" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a>
        <p className="tech">Python • April 2024 </p>
        <ul>
          <li>Processed and cleaned data using Python libraries such as Pandas and Matplotlib, ensuring accuracy for insights and visualisations.</li>
          <li>Created a word cloud to analyse popular themes in user reviews, leveraging text processing for sentiment analysis with NLTK.</li>
          <li>Built a simple classifier to categorise reviews as positive or negative based on overall ratings, demonstrating foundational machine learning concepts.</li>

        </ul>
      </div>

      <div className="project">
        <h3>Informed Visual Intervention Tool</h3>
        <a href="https://github.com/hlim0023/Android-Application" target="_blank" rel="noopener noreferrer">Android Software(Java)</a>
        <p className="tech">Android Studio Java •  October 2022 - June 2023 </p>
        <ul>
          <li>Led 3 developers in Agile sprints, delivering the Android app 2 weeks early by prioritizing critical path tasks and resolving 15+ blockers.</li>
          <li> Engineered modular Java classes following OOP best practices. .</li>
          <li>Conducted daily standups and code reviews, ensuring adherence to Java best practices and reducing post-release bugs by 25%.</li>
        </ul>
      </div>

 

      <div className="project">
        <h3>Lambda Calculus Parser (Functional Programming) </h3>
        <a href="https://github.com/hlin0023/snap" target="_blank" rel="noopener noreferrer"> Haskell</a>
        <p className="tech">Haskell • Oct 2022 – Dec 2022 </p>
        <ul>
          <li>Designed and implemented a parser for Lambda Calculus expressions using parser combinators and recursive descent techniques.</li>
          <li>Developed separate parsers for long and short lambda expressions, leveraging Applicative, Monad, and Functor interfaces..</li>
          <li>Extended the parser to support logical expressions and functional extensions like control structures and list operations.</li>

        </ul>
      </div>


    </section>
  );
};

export default Projects;