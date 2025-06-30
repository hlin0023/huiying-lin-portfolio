import React from 'react';
import './Header.css';

const Header = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('skills')}>Skills</button>
        <button onClick={() => scrollTo('experience')}>Experience</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <button onClick={() => scrollTo('more')}>More</button>
      </nav>
    </header>
  );
};

export default Header;