import React from 'react';
import css from './contact.module.css';

const Contact = () => {
  return (
    <div className={css.contactContainer}>
      <h1>Contact Me</h1>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>
          <img src="path/to/github-icon.png" alt="GitHub" />
          <a href="https://github.com/jakubpiksa">GitHub</a>
        </div>
        <div className={css.contactItem}>
          <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/jakubpiksa/">LinkedIn</a>
        </div>
        {/* Add more contact items (email, phone, etc.) */}
      </div>
    </div>
  );
}

export default Contact;
