import React, { Component } from 'react';
import './Nav.css';

import ViewList from 'views/viewList';
import ClassNameBuilder from 'lib/ClassNameBuilder';

class Nav extends Component {
  constructor() {
    super();
    this.getLinkClassName = this.getLinkClassName.bind(this);
    this.linkTo = this.linkTo.bind(this);
  }
  render() {
    const { welcome, experience, projects, about } = ViewList;
    return (
      <div className="Nav">
        <div className="nav-left">
          <a
            className={this.getLinkClassName(experience.id)}
            href={`#${experience.id}`}
            onClick={this.linkTo(experience.id)}
          >
            {experience.label}
          </a>
          <a
            className={this.getLinkClassName(projects.id)}
            href={`#${projects.id}`}
            onClick={this.linkTo(projects.id)}
          >
            {projects.label}
          </a>
        </div>
        <div className="nav-middle">
          <a
            className="brand display-font"
            href={`#${welcome.id}`}
            onClick={this.linkTo(welcome.id)}
          >
            Zach Newton
          </a>
        </div>
        <div className="nav-right">
          <a
            className={this.getLinkClassName(about.id)}
            href={`#${about.id}`}
            onClick={this.linkTo(about.id)}
          >
            {about.label}
          </a>
          <a
            className={this.getLinkClassName('resume')}
            href={'/Resume.docx'}
            target="_blank"
          >
            Resumé
          </a>
        </div>
      </div>
    );
  }

  linkTo(href) {
    return e => {
      document.dispatchEvent(
        new CustomEvent('viewlinked', {
          detail: { view: href }
        })
      );
      // this.props.setAppState('activeView', href);
    };
  }

  getLinkClassName(id) {
    const cnb = new ClassNameBuilder('nav-link');
    cnb.add('display-font');
    cnb.add('active', this.props.activeView === id);
    return cnb.className;
  }
}

export default Nav;
