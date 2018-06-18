import React from 'react';
import './Welcome.css';
import View from '../View';
import { BouncingImg } from './components';
import WelcomeData from './welcome.data';

const commonChildProps = {
  frameYReduction: 50
};

class Welcome extends View {
  constructor() {
    super();
    this.displayName = 'Welcome';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        {WelcomeData.map(
          ({
            id,
            img,
            title,
            description,
            wrapperProps = {},
            imgProps = {}
          }) => (
            <BouncingImg
              key={id}
              detail={description}
              {...wrapperProps}
              {...commonChildProps}
            >
              <img src={img} alt={title} title={title} {...imgProps} />
            </BouncingImg>
          )
        )}
      </div>
    );
  }
}

export default Welcome;
