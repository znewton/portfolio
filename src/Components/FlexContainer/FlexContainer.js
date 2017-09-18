import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FlexContainer extends Component {
  render() {
    let extras = [];
    for(let i = 0; i < 3 - (this.props.children.length % 3); i++) {
      extras.push(<div></div>);
    }
    return (
      <div className={'FlexContainer cols-'+this.props.cols}>
        {this.props.children}
        {extras}
      </div>
    );
  }
}

FlexContainer.propTypes = {
  cols: PropTypes.number,
};

FlexContainer.defaultProps = {
  cols: 3
};
