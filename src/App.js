import React, { Component } from 'react';
import './App.scss';

import SectionWrapper from './Components/SectionWrapper/SectionWrapper';
import Section from './Components/Section/Section';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionWrapper>
          <Section path="/">Home</Section>
          <Section path="test">Test</Section>
          <Section path="*">404</Section>
        </SectionWrapper>
      </div>
    );
  }
}
