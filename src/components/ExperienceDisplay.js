import React from 'react';

import './ExperienceDisplay.css';

class ExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(event) {
    event.preventDefault();
    this.props.toggleEdit(event);
  }
  render() {
    let display = [];
    this.props.experience.forEach((experienceItem, index) => {
      display.push(
        <span key={index + experienceItem.company}>
          {experienceItem.company}
        </span>,
        <span key={index + experienceItem.position}>
          {experienceItem.position}
        </span>,
        <span key={index + experienceItem.details}>
          {experienceItem.details}
        </span>,
        <span key={index + experienceItem.start}>{experienceItem.start}</span>,
        <span key={index + experienceItem.end}>{experienceItem.end}</span>
      );
    });
    return (
      <div id="experience-display">
        <h3>Company</h3>
        <h3>Position</h3>
        <h3>Details</h3>
        <h3>Start</h3>
        <h3>End</h3>
        {display}
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default ExperienceDisplay;
