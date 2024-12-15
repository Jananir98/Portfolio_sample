import React from 'react';
import './styles.scss';
import logo from './about3.png'; 
import arrow from './arrow.gif'; 
import { Animate } from 'react-simple-animate';

const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
     
        <p className='about-para'>
          Highly skilled React Developer with more than 2 years of experience in developing and implementing front-end architectures that have 
          resulted in significant increases in page load speed and user engagement. 
          Proficient in collaborating with back-end teams to integrate user-facing elements with server-side logic,
          and optimizing components for maximum performance. Adept at identifying and resolving performance and scalability issues, 
          staying up-to-date with emerging technologies and frameworks, and reducing development time for new projects.
        </p>
        <hr />
        <div className="personal-info">
          <h1>Personal Information</h1>
          <div className="info-item">
            <p>Name</p>
            <p style={{paddingLeft:'32px'}}>R. Janani</p>
          </div>
          <div className="info-item">
            <p>DOB</p>
            <p style={{paddingLeft:'40px'}}>23/11/1998</p>
          </div>
          <div className="info-item">
            <p>Address</p>
            <p style={{paddingLeft:'15px'}}>Thanjavur</p>
          </div>
          <div className="info-item">
            <p>Email</p>
            <p style={{paddingLeft:'30px'}}>jananirs06@gmail.com</p>
          </div>
          <div className="info-item">
            <p>Mobile</p>
            <p style={{paddingLeft:'22px'}}>8220909100</p>
          </div>
        </div>
      </div>
      <Animate
        play
        duration={1}
        // delay={1}
        start={{
          transform: 'translateX(830px)'
        }}
        end={{
          transform: 'translateX(100px)'
        }}
      >
        <div className="about-logo">
          <img src={arrow} alt="Arrow Icon" className="arrow" />
          <img src={logo} alt="Developer Logo" />
        </div>
      </Animate>
    </div>
  );
}

export default About;
