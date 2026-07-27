import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import More from './components/More.jsx';
import Footer from './components/Footer.jsx';

const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact', 'more'];

function App() {
  const [expandedSections, setExpandedSections] = useState(() =>
    Object.fromEntries(sectionIds.map((sectionId) => [sectionId, false]))
  );

  const setAllSections = (isExpanded) => {
    const nextState = Object.fromEntries(sectionIds.map((sectionId) => [sectionId, isExpanded]));
    setExpandedSections(nextState);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((currentState) => ({
      ...currentState,
      [sectionId]: !currentState[sectionId],
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="page-controls">
        <button type="button" className="control-button primary" onClick={() => setAllSections(true)}>
          Expand all
        </button>
        <button type="button" className="control-button" onClick={() => setAllSections(false)}>
          Collapse all
        </button>
      </div>
      <main>
        <Hero />
        <About isExpanded={expandedSections.about} onToggle={() => toggleSection('about')} />
        <Skills isExpanded={expandedSections.skills} onToggle={() => toggleSection('skills')} />
        <Experience isExpanded={expandedSections.experience} onToggle={() => toggleSection('experience')} />
        <Projects isExpanded={expandedSections.projects} onToggle={() => toggleSection('projects')} />
        <Education isExpanded={expandedSections.education} onToggle={() => toggleSection('education')} />
        <Contact isExpanded={expandedSections.contact} onToggle={() => toggleSection('contact')} />
        <More isExpanded={expandedSections.more} onToggle={() => toggleSection('more')} />
      </main>
      <Footer />
    </div>
  );
}

export default App;