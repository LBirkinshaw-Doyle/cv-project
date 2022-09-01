import React from 'react';

import './EducationDisplay.css';

class EducationDisplay extends React.Component {
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
    this.props.educationList.forEach((educationItem) => {
      display.push(
        <span>{educationItem.school}</span>,
        <span>{educationItem.title}</span>,
        <span>{educationItem.date}</span>
      );
    });
    return (
      <div id="education-display">
        <h3>School</h3>
        <h3>Course</h3>
        <h3>Graduation</h3>
        {display}
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default EducationDisplay;
