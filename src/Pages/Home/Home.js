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
        />
      </div>
    );
  }
}
