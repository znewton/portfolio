import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Achievement extends Component {
  render() {
    return (
      <div className="Achievement">
        {this.props.name} <span className="dates">(&nbsp;
          {this.props.dates.map((date, i) => (
            <span key={i}>{date}</span>
          ))}
        &nbsp;)</span>
      </div>
    );
  }
}

Achievement.propTypes = {
  name: PropTypes.string,
  dates: PropTypes.arrayOf(PropTypes.string),
};

Achievement.defaultProps = {
  name: '',
  dates: [],
};
