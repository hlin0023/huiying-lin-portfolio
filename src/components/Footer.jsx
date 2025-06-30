import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Huiying Lin. All rights reserved.</p>
      <p>Eligible to work in Australia (Full working rights)</p>
    </footer>
  );
};

export default Footer;