import React from 'react';

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
    };
  }
}

export default Education;