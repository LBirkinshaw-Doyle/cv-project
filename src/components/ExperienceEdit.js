import React from 'react';

import ExperienceEditInput from './ExperienceEditInput';

import './ExperienceEdit.css';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: this.props.experience,
    };
    this.handleExperienceItemChange =
      this.handleExperienceItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewExperienceItem = this.handleNewExperienceItem.bind(this);
    this.handleExperienceItemDelete =
      this.handleExperienceItemDelete.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  }

  handleExperienceItemChange(index, company, position, details, start, end) {
    let experienceArray = this.state.experience.slice();
    experienceArray[index] = {
      company: company,
      position: position,
      details: details,
      start: start,
      end: end,
    };
    this.setState({ experience: experienceArray });
  }
  handleNewExperienceItem(event) {
    event.preventDefault();
    const newIndex = this.state.experience.length;
    let experienceArray = this.state.experience.slice();
    experienceArray[newIndex] = {
      company: '',
      position: '',
      details: '',
      start: '',
      end: '',
    };
    this.setState({ experience: experienceArray }, this.updateExperience);
  }
  handleExperienceItemDelete(index) {
    let experienceArray = this.state.experience.slice();
    experienceArray.splice(index, 1);
    this.setState({ experience: experienceArray }, this.updateExperience);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.experience[0] !== undefined) this.updateExperience();
    this.props.toggleEdit(event);
  }

  updateExperience = () => {
    this.props.updateExperience(this.state.experience);
  };
  render() {
    let display = [];
    this.props.experience.forEach((experienceItem, index) => {
      display.push(
        <ExperienceEditInput
          company={experienceItem.company}
          position={experienceItem.position}
          details={experienceItem.details}
          start={experienceItem.start}
          end={experienceItem.end}
          index={index}
          key={experienceItem.company + experienceItem.position + index}
          handleChange={this.handleExperienceItemChange}
          handleDelete={this.handleExperienceItemDelete}
        />
      );
    });
    return (
      <form id="experience-form" onSubmit={this.handleSubmit}>
        {display}
        <button onClick={this.handleNewExperienceItem}>+</button>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ExperienceEdit;
