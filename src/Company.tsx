import React from 'react';
import './Company.css';
import type { CompanyData } from './data';

type CompanyProps = {
  company: CompanyData
}

function Company(props: CompanyProps) {
  const { company } = props;
  return (
    <div className="company">
      <div className="company-title-wrapper">
        <div className="company-title">{company.name}</div>
        <div className="company-city">{company.city}</div>
      </div>
      <div className="company-description">{company.company_description}</div>

      {
        company.positions.map((pos) => {
          return (
            <div className="company-position">{pos}</div>
          );
        })
      }

      <ul className="company-content">
        {
          company.content.map((lineItem) => <li>{lineItem}</li>)
        }
      </ul>
    </div>
  );
}

export default Company;
