import React, { Component } from 'react';

export default class Section extends Component {
  componentDidMount() {
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
    if(this.props.path == hash.slice(1))
      this.refs.Section.classList.add('active');
    else {
      this.refs.Section.scrollTop = 0;
      this.refs.Section.classList.remove('active');
    }
  }
  render() {
    return (
      <section
        ref="Section"
        data-path={'#'+this.props.path}
        className={"Section"+(this.props.active ? ' active' : '')}
      >
        <div>
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
