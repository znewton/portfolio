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
  { path: '/',         label: 'Home',     component: Home },
  { path: '/projects', label: 'Projects', component: Projects },
  { path: '/resume',   label: 'Resume',   component: Resume },
  { path: '/about',    label: 'About',    component: About },
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar routes={routes} />
        <SectionWrapper>
          {routes.map((route) => (
            <Section
              path={route.path}
              paths={routes.map(route => route.path)}
            ><route.component /></Section>
          ))}
          <Section
            path="*"
            paths={routes.map(route => route.path)}
          ><div><h1>404</h1></div></Section>
        </SectionWrapper>
      </div>
    );
  }
}
