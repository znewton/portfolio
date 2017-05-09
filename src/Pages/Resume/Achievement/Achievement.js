import React, { Component } from 'react';

export default class Achievement extends Component {
  render() {
    return (
      <div className="Achievement">
        Achievement
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
