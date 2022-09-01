import React from 'react';

import EducationEditInput from './EducationEditInput';

//import './EducationEdit.css';

class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: this.props.educationList,
    };
    this.handleEducationItemChange = this.handleEducationItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewEducationItem = this.handleNewEducationItem.bind(this);
    this.handleEducationItemDelete = this.handleEducationItemDelete.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
  }

  handleEducationItemChange(index, school, title, date) {
    let educationArray = this.state.education.slice();
    educationArray[index] = { school: school, title: title, date: date };
    this.setState({ education: educationArray });
  }
  handleNewEducationItem(event) {
    event.preventDefault();
    const newIndex = this.state.education.length;
    let educationArray = this.state.education.slice();
    educationArray[newIndex] = { school: '', title: '', date: '' };
    this.setState({ education: educationArray }, this.updateEducation);
  }
  handleEducationItemDelete(index) {
    let educationArray = this.state.education.slice();
    educationArray.splice(index, 1);
    this.setState({ education: educationArray }, this.updateEducation);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.education[0] !== undefined) this.updateEducation();
    this.props.toggleEdit(event);
  }

  updateEducation = () => {
    this.props.updateEducation(this.state.education);
  };
  render() {
    let display = [];
    this.props.educationList.forEach((educationItem, index) => {
      display.push(
        <EducationEditInput
          school={educationItem.school}
          title={educationItem.title}
          date={educationItem.date}
          index={index}
          key={educationItem.school + educationItem.title + index}
          handleChange={this.handleEducationItemChange}
          handleDelete={this.handleEducationItemDelete}
        />
      );
    });
    return (
      <form id="education-form" onSubmit={this.handleSubmit}>
        {display}
        <button onClick={this.handleNewEducationItem}>+</button>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EducationEdit;
