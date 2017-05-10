import React, { Component } from 'react';

export default class FlexContainer extends Component {
  render() {
    let extras = [];
    for(let i = 0; i < 3 - (this.props.children.length % 3); i++) {
      extras.push(<div></div>);
    }
    return (
      <div className="FlexContainer">
        {this.props.children}
        {extras}
      </div>
    );
  }
}
