import React, { Component } from 'react';

export default class Section extends Component {
  componentDidMount() {
    if(window.addEventListener) {
      window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        this.changePage(window.location.hash);
      });
      if(window.location.hash) {
        this.changePage(window.location.hash);
      } else {
        window.location = '#/';
      }
    }
  }
  changePage(hash) {
    if(this.props.path == hash.slice(1)) {
      this.refs.Section.classList.add('active');
      // this.refs.Section.classList.remove('right');
      // this.refs.Section.classList.remove('left');
    } else {
      this.refs.InnerDiv.scrollTop = 0;
      this.refs.Section.classList.remove('active');
      if(this.props.paths.indexOf(hash.slice(1)) > this.props.paths.indexOf(this.props.path)) {
        this.refs.Section.classList.add('left');
        this.refs.Section.classList.remove('right');
      } else {
        this.refs.Section.classList.add('right');
        this.refs.Section.classList.remove('left');
      }
    }
  }
  render() {
    return (
      <section
        ref="Section"
        data-path={'#'+this.props.path}
        className={"Section"+(this.props.active ? ' active' : '')}
      >
        <div ref="InnerDiv">
          {this.props.children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  path: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool
}
