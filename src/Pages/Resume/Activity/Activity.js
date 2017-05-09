import React, { Component } from 'react';

export default class Activity extends Component {
  render() {
    return (
      <div className="Activity">
        Activity
      </div>
    );
  }
}

Activity.propTypes = {
  name: React.PropTypes.string,
  dates: React.PropTypes.arrayOf(React.PropTypes.string),
  actions: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string,
    date: React.PropTypes.string,
  })),
};

Activity.defaultProps = {
  name: '',
  dates: [],
  actions: [],
};
