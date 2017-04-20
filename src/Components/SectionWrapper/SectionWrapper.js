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
    // Remove #
    hash = hash.slice(1);
    let offset;
    // Match hash to path
    for(offset = 0; offset < this.props.children.length; offset++) {
      let child = this.props.children[offset];
      if(child.props.path === hash) break;
    }
    // Handle page not found
    if(offset === this.props.children.length) offset = this.props.children.length-1;
    // Set SectionWrapper Offset to the page
    this.refs.SectionWrapper.style.marginLeft = -1*100*(offset)+'vw';
  }
  render() {
    return (
      <section ref="SectionWrapper" className="SectionWrapper">
        {this.props.children}
      </section>
    );
  }
}
