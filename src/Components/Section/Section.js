import React, { Component } from 'react';

export default class Section extends Component {
  constructor() {
    super();
    this.state = {
      color:(Math.random()*0xFFFFFF<<0).toString(16),
    }
  }
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
      this.refs.Section.classList.remove('active');
    }
  }
  render() {
    return (
      <section
        ref="Section"
        data-path={'#'+this.props.path}
        className={"Section"+(this.props.active ? ' active' : '')}
        style={{
          backgroundColor: '#'+this.state.color,
        }}
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
