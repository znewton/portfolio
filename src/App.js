import React, { Component } from 'react';
import './App.scss';

import SectionWrapper from './Components/SectionWrapper/SectionWrapper';
import Section from './Components/Section/Section';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/about', label: 'About' },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar routes={routes} />
        <SectionWrapper>
          <Section path="/"><Home /></Section>
          <Section path="/projects"><Projects /></Section>
          <Section path="/resume"><Resume /></Section>
          <Section path="/about"><About /></Section>
          <Section path="*"><div><h1>404</h1></div></Section>
        </SectionWrapper>
      </div>
    );
  }
}
