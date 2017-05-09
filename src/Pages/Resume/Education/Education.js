import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <div className="institution-name">{this.props.name}</div>
        <div className="location">{this.props.city}, {this.props.state}</div>
        <div className="time-period">
          {this.props.start_date+' - '
            +(this.props.end_date || 'present')}
        </div>
        <div className="earned">{this.props.earned}</div>
        <div className="gpa">{this.props.gpa}</div>
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
