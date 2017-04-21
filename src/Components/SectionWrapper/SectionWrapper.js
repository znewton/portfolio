import React, { Component } from 'react';

export default class SectionWrapper extends Component {
  componentDidMount() {
    this.refs.SectionWrapper.style.width = this.props.children.length*100+'vw';
    if(window.addEventListener) {
      if(window.location.hash) {
        this.changePage(window.location.hash);
      } else {
        window.location = '#/';
      }
      window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        this.changePage(window.location.hash);
      });
    }
  }
  changePage(hash) {
    // Handle no hash
    if(!hash) window.location = '#/';
    const sw = this.refs.SectionWrapper;
    // Remove #
    hash = hash.slice(1);
    let offset;
    let currentLeft = sw.style.left.slice(0,-2);
    currentLeft = !currentLeft ? 0 : currentLeft;
    let currentTransform = sw.style.transform.slice(11,-3);
    // Match hash to path
    for(offset = 0; offset < this.props.children.length; offset++) {
      let child = this.props.children[offset];
      if(child.props.path === hash) break;
    }
    // Handle page not found
    if(offset === this.props.children.length) offset = this.props.children.length-1;
    // Set SectionWrapper Offset to the page
    console.log(offset);
    let nextLeft = -1*100*(offset);
    let dir = (1*currentLeft > nextLeft ? 1 : -1);
    sw.style.left = currentLeft+'vw';
    sw.style.transform = 'translateX('+ 100*dir*-1+'vw)';
  }
  render() {
    return (
      <section ref="SectionWrapper" className="SectionWrapper">
        {this.props.children}
      </section>
    );
  }
}
