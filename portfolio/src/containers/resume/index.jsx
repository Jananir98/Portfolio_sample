import React from 'react';
import './styles.scss';

const Resume = () => {
  return (
    <div className='resume'>
      <div className='experience'>
        <h1 className='exp-head'>Experience</h1>
        <p className='exp-para'>
          <span style={{color:'goldenrod'}}>Front End Developer</span><br/>
          [INFORIOS Pvt Limited], Thanjavur<br/>
          August 2022 – Present
        </p>
      </div>
      <div className='timeline'>
        <div className='projects'>
          <h1 className='exp-head' style={{marginLeft:'15px'}}>Projects</h1>
          <div className='timeline-item project-item'>
            <h3>Resilient Plus</h3>
            <p>
            The Resilient Plus platform is an advanced supplier management solution designed to handle the complexities of multi-tier supplier networks.      
              The Resilient Plus platform empowers businesses to achieve supply chain resilience by offering real-time insights,
               enhanced visibility, and streamlined supplier communication. With features like geo-mapping, surveys, and dynamic alerts,
               the platform supports better decision-making.
            </p>
          </div>
          <div className='timeline-item project-item'>
            
            <h3>Employee Management System</h3>
            <p>
              Automated staff attendance management and leave requests with reporting officer approvals.<br/>
              Enabled clock-in/out functionalities and notifications for leave and permissions approvals.<br/>
              Managed business payment transactions and account suspensions for non-payment.
            </p>
          </div>
          <div className='timeline-item project-item'>
            <h3>College Webportal</h3>
            <p>
              Visitors can view and apply for courses online.<br/>
              Students register and log in to access their personalized dashboard.<br/>
              Integrates secure payment options for course fees and transactions.<br/>
              Shows enrolled courses, grades, and payment status.
            </p>
          </div>
          
        </div>
        <div className='education'>
          <h1 className='exp-head'>Education</h1>
          <div className='timeline-item education-item'>
            <h3>B.E(Computer Science and Engineering)</h3>
            <p>
              Ponnaiyah Ramajayam Engineering College<br/>
              Year of Graduation 2020<br/>
              72%
            </p>
          </div>
          <div className='timeline-item education-item'>
            <h3>12th grade</h3>
            <p>
              Auxilium Girls Higher Secondary School<br/>
              Year of Graduation 2016<br/>
              72%
            </p>
          </div>
          <div className='timeline-item education-item'>
            <h3>10th grade</h3>
            <p>
              Auxilium Girls Higher Secondary School<br/>
              Year of Graduation 2014<br/>
              88%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
