import { Component } from 'react';
import ClassNameBuilder from 'lib/ClassNameBuilder';

class View extends Component {
  constructor() {
    super();
    this.cnb = new ClassNameBuilder('view');
  }
  componentDidMount() {
    const element = document.getElementById(this.props.id);
    this.scrollHandler = () => {
      if (this.props.isActive) return;
      const elBox = element.getBoundingClientRect();
      if (elBox.top < 50 && elBox.bottom < window.innerHeight + 50) {
        this.props.setActiveView();
      }
    };
    window.addEventListener('scroll', this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}

export default View;
