import React from 'react';

import './ExperienceEditInput.css';

class ExperienceEditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyValue: this.props.company,
      positionValue: this.props.position,
      detailsValue: this.props.detils,
      startValue: this.props.start,
      endValue: this.props.end,
    };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.handleChange(
        this.props.index,
        this.state.companyValue,
        this.state.positionValue,
        this.state.detailsValue,
        this.state.startValue,
        this.state.endValue
      );
    }
  }
  handleCompanyChange(event) {
    this.setState({ companyValue: event.target.value });
  }
  handlePositionChange(event) {
    this.setState({ positionValue: event.target.value });
  }
  handleDetailsChange(event) {
    this.setState({ detailsValue: event.target.value });
  }
  handleStartChange(event) {
    this.setState({ startValue: event.target.value });
  }
  handleEndChange(event) {
    this.setState({ endValue: event.target.value });
  }
  handleDeleteEvent(event) {
    event.preventDefault();
    this.props.handleDelete(this.props.index);
  }
  render() {
    return (
      <div id="experience-item">
        <label>
          Company:
          <input
            type="text"
            value={this.state.companyValue}
            onChange={this.handleCompanyChange}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            value={this.state.positionValue}
            onChange={this.handlePositionChange}
          />
        </label>
        <label>
          Details:
          <textarea
            rows={4}
            cols={50}
            value={this.state.detailsValue}
            onChange={this.handleDetailsChange}
          />
        </label>
        <label>
          Start:
          <input
            type="date"
            value={this.state.startValue}
            onChange={this.handleStartChange}
          />
        </label>
        <label>
          End:
          <input
            type="date"
            value={this.state.endValue}
            onChange={this.handleEndChange}
          />
        </label>
        <button onClick={this.handleDeleteEvent}>Delete</button>
      </div>
    );
  }
}

export default ExperienceEditInput;
