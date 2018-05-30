import React, { Component } from 'react';
import './Main.css';

import ViewList from 'views/viewList';
import SmoothScroll from 'lib/SmoothScroll';

class Main extends Component {
  componentDidMount() {
    document.addEventListener('viewlinked', e => {
      SmoothScroll(document.getElementById(e.detail.view));
    });
  }

  render() {
    return (
      <div className="Main">
        {Object.keys(ViewList).map(key => {
          const view = ViewList[key];
          return <view.component key={view.id} id={view.id} />;
        })}
      </div>
    );
  }
}

export default Main;
