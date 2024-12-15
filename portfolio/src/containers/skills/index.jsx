import React from 'react';
import './styles.scss';
import { skillData } from './utils'; 
import { Line } from 'rc-progress';

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='skills-header'>My Skills</h1>
      {skillData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className='skills-category' style={{marginTop:'50px',marginBottom:'30px',color:'goldenrod'}}>{category.label}</h2>
          <div className='skills-content'>
            {category.data.map((skill, index) => (
              <div className='skill-item' key={index}>
                <div className='skill-info'>
                  <p className='skill-name'>{skill.name}</p>
                  <p className='skill-percentage'>{skill.percentage}</p>
                </div>
                <Line
                  percent={parseInt(skill.percentage, 10)}
                  strokeWidth="2"
                  strokeColor="white"
                  trailColor="goldenrod"
                  className='skill-bar'
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
