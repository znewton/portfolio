import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        Education
      </div>
    );
  }
}

Education.propTypes = {
  name: React.PropTypes.string,
  city: React.PropTypes.string,
  state: React.PropTypes.string,
  start_date: React.PropTypes.string,
  end_date: React.PropTypes.string,
  earned: React.PropTypes.string,
  gpa: React.PropTypes.string,
};

Education.defaultProps = {
  name: '',
  city: '',
  state: '',
  start_date: '',
  end_date: '',
  earned: '',
  gpa: '',
};
