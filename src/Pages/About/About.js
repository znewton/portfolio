import React, { Component } from 'react';

import HeroImage from '../../Components/HeroImage/HeroImage';
import Card from '../../Components/Card/Card';
import FlexContainer from '../../Components/FlexContainer/FlexContainer';

import log from '../../assets/log-adjusted-medium.jpg';

export default class About extends Component {
  render() {
    return (
      <article className="About">
        <HeroImage
          src={log}
          alt="Me crossing a log over a creek"
          overlay={true}
          header={<span>About<br/>Me</span>}
          hleft={5}
          htop={3}
        />
        <FlexContainer>
          <Card
            title="Who"
            content="Front-end Web Developer, Gamer, Cyclist, Yerba Mate enthusiast, puppy lover"
          />
          <Card
            title="What"
            content="ReactJS, Sass, caffeine"
          />
          <Card
            title="Where"
            content="Iowa State University"
          />
          <Card
            title="Why"
            content="Making the internet more nicer to look at"
          />
          <Card
            title="How"
            content="More caffeine"
          />
        </FlexContainer>
      </article>
    );
  }
}
