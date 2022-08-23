import './App.css';
import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInformation from './components/GeneralInformation';

class App extends React.Component {
  render() {
    return (
      <div id="cv-container">
        <GeneralInformation />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
