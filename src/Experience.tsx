import React from 'react';
import './Section.css';
import Company from './Company';
import resumeData from './data';

function Experience() {
  return (
    <div className="section">
      <div className="section-title">WORK EXPERIENCE</div>
      {resumeData.sections.experience.companies.map((company) => <Company company={company} />)}
    </div>
  );
}

export default Experience;
