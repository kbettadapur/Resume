import React from 'react';
// import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="title">KIRIN A. BETTADAPUR</div>
        <div className="phone-contact">+1-678-620-8398 (Mobile)</div>
        <a href="/" className="email-contact">kirinbetta97@gmail.com</a>
        <a href="/" className="linkedin-contact">https://linkedin.com/in/kirin-bettadapur</a>
      </div>

      <hr className="header-separator"/>
    </>
  );
}

export default Header;
