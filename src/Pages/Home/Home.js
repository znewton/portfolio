import React, { Component } from 'react';

import HeroImage from '../../Components/HeroImage/HeroImage';

import waterfall from '../../assets/waterfall-adjusted-small.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HeroImage
          src={waterfall}
          alt="Me standing on a log in a creek over a waterall"
          overlay={true}
          left={-5}
          header="Home"
          hleft={50}
          htop={30}
          subheader={<span>Welcome to my portfolio!</span>}
        />
        <h1>Test</h1>
      </div>
    );
  }
}
