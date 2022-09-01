import React from 'react';

import GeneralInfoDisplay from './GeneralInfoDisplay';
import GeneralInfoEdit from './GeneralInfoEdit';

import './GeneralInformation.css';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      edit: true,
    };
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  updateName = (name) => {
    this.setState({ name: name });
  };
  updateEmail = (email) => {
    this.setState({ email: email });
  };
  updatePhoneNumber = (phoneNumber) => {
    this.setState({ phoneNumber: phoneNumber });
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
        <GeneralInfoEdit
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          updateName={this.updateName}
          updateEmail={this.updateEmail}
          updatePhoneNumber={this.updatePhoneNumber}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      display = (
        <GeneralInfoDisplay
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          toggleEdit={this.toggleEdit}
        />
      );
    }
    return <div id="general-info-container">{display}</div>;
  }
}

export default GeneralInformation;
