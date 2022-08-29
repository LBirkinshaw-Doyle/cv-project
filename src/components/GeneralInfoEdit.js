import React from 'react';

import './GeneralInfoEdit.css';

class GeneralInfoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: this.props.name,
      emailValue: this.props.email,
      phoneNumberValue: this.props.phoneNumber,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ nameValue: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ emailValue: event.target.value });
  }
  handlePhoneNumberChange(event) {
    this.setState({ phoneNumberValue: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateName(this.state.nameValue);
    this.props.updateEmail(this.state.emailValue);
    this.props.updatePhoneNumber(this.state.phoneNumberValue);
    this.props.toggleEdit(event);
  }
  render() {
    return (
      <form id="general-info-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.nameValue}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={this.state.emailValue}
            onChange={this.handleEmailChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={this.state.phoneNumberValue}
            onChange={this.handlePhoneNumberChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GeneralInfoEdit;
