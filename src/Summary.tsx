import React from 'react';
import './Section.css';
import resumeData from './data';

function Summary() {
  return (
    <div className="section">
      <div className="section-title">SUMMARY</div>
      <div className="section-content">
        {resumeData.sections.summary.content}
      </div>
    </div>
  );
}

export default Summary;
