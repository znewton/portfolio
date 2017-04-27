import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
}
