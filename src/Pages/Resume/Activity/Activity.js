import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Activity extends Component {
  render() {
    return (
      <div className="Activity">
        <div className="title">
          <div className="name">{this.props.name}</div>
          <div className="dates">
            ( {this.props.dates.map((date, i) => (
              <span key={i}>{date}</span>
            ))} )
          </div>
        </div>
        <ul className="actions">
          {this.props.actions.reverse().map((action, i) => (
            <li key={i}>
              {action.description} <span className="action-date">( {action.date} )</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Activity.propTypes = {
  name: PropTypes.string,
  dates: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    date: PropTypes.string,
  })),
};

Activity.defaultProps = {
  name: '',
  dates: [],
  actions: [],
};
