import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'views/index.css';
import 'components/index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

let isScrolled = false;

window.addEventListener('scroll', e => {
  if (!isScrolled && window.scrollY > 3) {
    isScrolled = true;
    document.body.classList.add('scrolled');
  } else if (isScrolled && window.scrollY < 3) {
    isScrolled = false;
    document.body.classList.remove('scrolled');
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
