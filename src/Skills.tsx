import React from 'react';
import './Section.css';
import './Skills.css';
import resumeData from './data';

function Skills() {
  return (
    <div className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content skills">
        {
          resumeData.sections.skills.map((skillsList) => {
            return (
              <ul className="skills-list">
                {
                  skillsList.map((skill) => {
                    return (
                      <li>{skill}</li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}

export default Skills;
