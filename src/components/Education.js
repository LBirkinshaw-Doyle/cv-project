import React from 'react';

import EducationDisplay from './EducationDisplay';
import EducationEdit from './EducationEdit';

import './Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          school: '',
          title: '',
          date: '',
        },
      ],
      edit: true,
    };
    this.updateEducation = this.updateEducation.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  updateEducation = (list) => {
    this.setState({ education: list });
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
        <EducationEdit
          educationList={this.state.education}
          updateEducation={this.updateEducation}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      display = (
        <EducationDisplay
          educationList={this.state.education}
          toggleEdit={this.toggleEdit}
        />
      );
    }
    return <div id="education-container">{display}</div>;
  }
}

export default Education;
