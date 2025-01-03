import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Misc from './Misc';
import Skills from './Skills';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Summary />
      <Education />
      <Skills />
      <Experience />
      <Misc />
    </div>
  );
}

export default App;
