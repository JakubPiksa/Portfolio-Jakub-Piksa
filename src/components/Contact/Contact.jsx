import React from 'react';
import css from './contact.module.css';
import LinkedIn from '../../utils/icons/linkedin.svg'
import Mail from '../../utils/icons/envelope.svg'
import GitHub from '../../utils/icons/github.svg'
import Phone from '../../utils/icons/phone.svg'
 
const Contact = () => {
  return (
    <div className={css.contactContainer}>
      <h1>Contact Me</h1>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>          
          <a href="https://github.com/jakubpiksa"><img src={GitHub} alt="GitHub" className={css.contactItemImg} />GitHub</a>
        </div>
        <div className={css.contactItem}>          
          <a href="https://www.linkedin.com/in/jakub-piksa-318b37245/"><img src={LinkedIn} alt='linkedin' className={css.contactItemImg}></img>LinkedIn</a>
        </div>
        <div className={css.contactItem}>          
          <a href="mailto:kuba.piksa@wp.pl"><img src={Mail} alt='E-Mail' className={css.contactItemImg}></img>E-mail</a>
        </div>
        <div className={css.contactItem}>          
          <a href="tel:+48690314155"><img src={Phone} alt='690 314 155' className={css.contactItemImg}></img>Call Me</a>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
