import React from 'react';

//import './EducationEditInput.css';

class EducationEditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolValue: this.props.school,
      titleValue: this.props.title,
      dateValue: this.props.date,
    };
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.handleChange(
        this.props.index,
        this.state.schoolValue,
        this.state.titleValue,
        this.state.dateValue
      );
    }
  }
  handleSchoolChange(event) {
    this.setState({ schoolValue: event.target.value });
  }
  handleTitleChange(event) {
    this.setState({ titleValue: event.target.value });
  }
  handleDateChange(event) {
    this.setState({ dateValue: event.target.value });
  }
  handleDeleteEvent(event) {
    event.preventDefault();
    this.props.handleDelete(this.props.index);
  }
  render() {
    return (
      <div id="education-item">
        <label>
          School:
          <input
            type="text"
            value={this.state.schoolValue}
            onChange={this.handleSchoolChange}
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            value={this.state.titleValue}
            onChange={this.handleTitleChange}
          />
        </label>
        <label>
          date:
          <input
            type="date"
            value={this.state.dateValue}
            onChange={this.handleDateChange}
          />
        </label>
        <button onClick={this.handleDeleteEvent}>Delete</button>
      </div>
    );
  }
}

export default EducationEditInput;
