import React from 'react';

import ExperienceDisplay from './ExperienceDisplay';
import ExperienceEdit from './ExperienceEdit';

import './Experience.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        {
          company: '',
          position: '',
          details: '',
          start: '',
          end: '',
        },
      ],
      edit: true,
    };
    this.updateExperience = this.updateExperience.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  updateExperience = (list) => {
    this.setState({ experience: list });
  };
  toggleEdit = (event) => {
    event.preventDefault();
    this.state.edit
      ? this.setState({ edit: false })
      : this.setState({ edit: true });
  };
  render() {
    let display;
    if (this.state.edit) {
      display = (
        <ExperienceEdit
          experience={this.state.experience}
          updateExperience={this.updateExperience}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      display = (
        <ExperienceDisplay
          experience={this.state.experience}
          toggleEdit={this.toggleEdit}
        />
      );
    }
    return <div id="experience-container">{display}</div>;
  }
}

export default Experience;
