import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-methods">
        <p>Email: <a href="mailto:hlin0023@hotmail.com">hlin0023@hotmail.com</a></p>
        <p>Phone: 0473 849 716</p>
        <div className="contact-links">
          <a href="https://github.com/hlim0023" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a> </a>
          <a href="https://linkedin.com/in/huiying-lin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;