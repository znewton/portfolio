import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <div className="title">
          <div className="institution">{this.props.name}</div>
          <div className="location">{this.props.city}, {this.props.state}</div>
        </div>
        <div className="for">
          <div className="received">{this.props.earned}</div>
          <div className="duration">
            ({' '+this.props.start_date+' - '
              +(this.props.end_date.trim() || 'Present')+' '})
          </div>
        </div>
        <div className="gpa">GPA: {this.props.gpa}</div>
      </div>
    );
  }
}

Education.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  earned: PropTypes.string,
  gpa: PropTypes.string,
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
