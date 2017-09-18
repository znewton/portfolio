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
            content={<ul>
              <li>Front-end Developer</li>
              <li>Gamer</li>
              <li>Cyclist</li>
              <li>Yerba Mate enthusiast</li>
              <li>Dog lover</li>
            </ul>}
          />
          <Card
            title="What"
            content={<ul><li>React</li><li>Sass</li><li>caffeine</li></ul>}
          />
          <Card
            title="Where"
            content="Iowa State University"
          />
          <Card
            title="Why"
            content="Make the internet better"
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
