import React from 'react';

import EducationEditInput from './EducationEditInput';

//import './EducationEdit.css';

class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
    };
    this.handleEducationItemChange = this.handleEducationItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEducationItemChange(index, school, title, date) {
    let educationArray = this.state.education.slice();
    educationArray[index] = { school: school, title: title, date: date };
    this.setState({ education: educationArray });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.education[0] !== undefined)
      this.props.updateEducation(this.state.education);
    this.props.toggleEdit(event);
  }
  render() {
    let display = [];
    this.props.educationList.forEach((educationItem, index) => {
      display.push(
        <EducationEditInput
          school={educationItem.school}
          title={educationItem.title}
          date={educationItem.date}
          index={index}
          key={educationItem.school + educationItem.title}
          handleChange={this.handleEducationItemChange}
        />
      );
    });
    return (
      <form id="education-form" onSubmit={this.handleSubmit}>
        {display}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EducationEdit;
