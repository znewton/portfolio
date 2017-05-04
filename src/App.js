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

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
  console.log(evt)
  if ( ! xDown || ! yDown ) {
    return;
  }
  let xUp = evt.changedTouches[0].clientX;
  let yUp = evt.changedTouches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;
  let dir = 0;
  if ( Math.abs(xDiff) > Math.abs(yDiff) ) {/*side not vertical*/
    if(Math.abs(xDiff) > window.innerWidth*2/5) {
      if ( xDiff > 0 ) {
        /* left swipe */
        dir = 1;
      } else {
        /* right swipe */
        dir = -1;
      }
    }
  }
  if(dir) {
    let i = 0;
    for(i = 0; i < routes.length; i++)
      if (routes[i].path == window.location.hash.slice(1)) break;
    console.log(i);
    if ((i+dir) >= 0 && (i+dir) < routes.length)
      window.location = '#'+routes[i+dir].path;
  }
  /* reset values */
  xDown = null;
  yDown = null;
};

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
