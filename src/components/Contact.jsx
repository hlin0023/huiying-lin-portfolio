import React from 'react';
import './Contact.css';

const previewContacts = [
  { label: 'Email', value: 'hlin0023@hotmail.com' },
  { label: 'Phone', value: '0473 849 716' },
  { label: 'GitHub', value: 'hlim0023' },
  { label: 'LinkedIn', value: 'Harrison Huiying L' },
];

const Contact = ({ isExpanded, onToggle }) => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        {!isExpanded ? (
          <>
            <div className="key-points-grid contact-preview-grid">
              {previewContacts.map((contact) => (
                <article className="key-point-card" key={contact.label}>
                  <h3>{contact.label}</h3>
                  <p>{contact.value}</p>
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
            <p className="contact-description">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:hlin0023@hotmail.com">hlin0023@hotmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:0473849716">0473 849 716</a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="contact-links">
                <a href="https://github.com/hlim0023" target="_blank" rel="noopener noreferrer" className="social-button">
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/harrison-huiying-l-9b19b21b0" target="_blank" rel="noopener noreferrer" className="social-button">
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="section-actions">
              <button type="button" className="section-toggle" onClick={onToggle} aria-expanded={isExpanded}>
                Show less
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;