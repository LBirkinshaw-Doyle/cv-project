import React from 'react';

//import './EducationDisplay.css';

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
    return (
      /*
      <div id="general-info-display">
        <h1 id="general-info-name">{this.props.name}</h1>
        <span id="general-info-email">{this.props.email}</span>
        <span id="general-info-phone">{this.props.phoneNumber}</span>
        <button onClick={this.handleEdit}>Edit</button>
      </div>*/
      <div></div>
    );
  }
}

export default EducationDisplay;
