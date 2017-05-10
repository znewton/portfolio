import React, { Component } from 'react';

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
            ({this.props.start_date+' - '
              +(this.props.end_date || 'present')})
          </div>
        </div>
        <div className="gpa">GPA: {this.props.gpa}</div>
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
