import React, { Component } from 'react';

export default class Achievement extends Component {
  render() {
    return (
      <div className="Achievement">
        {this.props.name} <span className="dates">(
          {this.props.dates.map((date, i) => (
            <span key={i}>{date}</span>
          ))}
        )</span>
      </div>
    );
  }
}

Achievement.propTypes = {
  name: React.PropTypes.string,
  dates: React.PropTypes.arrayOf(React.PropTypes.string),
};

Achievement.defaultProps = {
  name: '',
  dates: [],
};
