import React from 'react';

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
    };
  }
  render() {
    return <div></div>;
  }
}

export default Experience;
