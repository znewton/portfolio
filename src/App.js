import React, { Component } from 'react';
import './App.scss';

import SectionWrapper from './Components/SectionWrapper/SectionWrapper';
import Section from './Components/Section/Section';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const routes = [
  { path: '/', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'test1', label: 'Test1' },
  { path: 'test2', label: 'Test2' },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar routes={routes} />
        <SectionWrapper>
          <Section path="/"><Home /></Section>
          <Section path="about"><About /></Section>
          <Section path="test1"><div><h1>Test 1</h1></div></Section>
          <Section path="test2"><div><h1>Test 2</h1></div></Section>
          <Section path="*"><div><h1>404</h1></div></Section>
        </SectionWrapper>
      </div>
    );
  }
}
