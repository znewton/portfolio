import React, { Component } from 'react';
import './App.scss';

import SectionWrapper from './Components/SectionWrapper/SectionWrapper';
import Section from './Components/Section/Section';
import Navbar from './Components/Navbar/Navbar';

const routes = [
  { path: '/', label: 'Home' },
  { path: 'test', label: 'Test' },
  { path: 'test1', label: 'Test1' },
  { path: 'test2', label: 'Test2' },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar routes={routes} />
        <SectionWrapper>
          <Section path="/"><h1>Home</h1></Section>
          <Section path="test"><h1>Test</h1></Section>
          <Section path="test1"><h1>Test 1</h1></Section>
          <Section path="test2"><h1>Test 2</h1></Section>
          <Section path="*"><h1>404</h1></Section>
        </SectionWrapper>
      </div>
    );
  }
}
