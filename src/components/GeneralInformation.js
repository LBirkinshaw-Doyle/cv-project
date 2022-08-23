import React from 'react';
import Input from './Input';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
    };
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
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
  render() {
    return (
      <div id="general-info-container">
        <Input type="text" value={this.state.name} updater={this.updateName} />
      </div>
    );
  }
}

export default GeneralInformation;
