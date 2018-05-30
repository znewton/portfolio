import React, { Component } from 'react';
import './Main.css';

import ViewList from 'views/viewList';
import SmoothScroll from 'lib/SmoothScroll';

class Main extends Component {
  componentDidUpdate() {
    SmoothScroll(document.getElementById(this.props.activeView));
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
