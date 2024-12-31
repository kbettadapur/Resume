import React from 'react';
import './Section.css';
import './Misc.css';
import resumeData from './data';

function Misc() {
  return (
    <div className="section">
      <div className="section-title">{resumeData.sections.misc.title}</div>
      <div className="misc-items">
        {resumeData.sections.misc.misc_items.map((misc) => <div>{misc}</div> )}
      </div>
    </div>
  );
}

export default Misc;
