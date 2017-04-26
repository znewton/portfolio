import React, { Component } from 'react';

import HeroImage from '../../Components/HeroImage/HeroImage';

import log from '../../assets/log-adjusted-medium.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <HeroImage
          src={log}
          alt="Me crossing a log over a creek"
          overlay={true}
          header={<span>About<br/>Me</span>}
          hleft={5}
          htop={3}
        />
        <h1>Test</h1>
      </div>
    );
  }
}
