import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        Experience
      </div>
    );
  }
}

Experience.propTypes = {
  company_name: React.PropTypes.string,
  position: React.PropTypes.string,
  start_date: React.PropTypes.string,
  end_date: React.PropTypes.string,
  actions: React.PropTypes.arrayOf(React.PropTypes.string),
};

Experience.defaultProps = {
  company_name: '',
  position: '',
  start_date: '',
  end_date: '',
  actions: [],
};
