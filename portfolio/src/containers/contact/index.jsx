import React from 'react';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
  return (
    <Animate
      play
      duration={1}
      start={{
        transform: 'translateY(-300%)',
        opacity: 0,
      }}
      end={{
        transform: 'translateY(0)',
        opacity: 1,
      }}
    >
      <div className='contact'>
        <h1>Contact Me</h1>
        <div className='contact-details'>
          <label>Email: <span><a href="mailto:jananirs06@gmail.com">jananirs06@gmail.com</a></span></label>
          <label>Mobile: <span>8220909100</span></label>
          <label>LinkedIn: <span><a href="https://www.linkedin.com/in/janani-r123" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/janani-r123</a></span></label>
        </div>
      </div>
    </Animate>
  );
}

export default Contact;
