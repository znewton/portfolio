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
              <li>PC Gamer</li>
              <li>Avid Cyclist</li>
              <li>Amateur Chef</li>
              <li>Yerba Mate enthusiast</li>
              <li>Dog lover</li>
            </ul>}
          />
          <Card
            title="What"
            content={<ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Surface Book</li>
              <li>caffeine</li>
            </ul>}
          />
          <Card
            title="Where"
            content={<ul>
              <li><strong>From:</strong> Minneapolis, MN</li>
              <li><strong>At:</strong> Iowa State University</li> 
              <li><strong>Going:</strong> West</li> 
            </ul>}
          />
          <Card
            title="Why"
            content={<ul>
              <li>Improve the internet</li>
              <li>Improve the world</li>
            </ul>}
          />
          <Card
            title="How"
            content={<ul>
              <li>Caffeine</li>  
              <li>Late nights</li>  
              <li>Good friends</li>  
            </ul>}
          />
        </FlexContainer>
      </article>
    );
  }
}
