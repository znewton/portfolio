import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="image-wrapper">
          {this.props.image && (
            <img src={this.props.image} alt="Project screenshot" />
          )}
        </div>
        <section>
          <h3 className="title">{this.props.name}</h3>
          <div className="contents">
            <div className="description">
              {this.props.description}
            </div>
            {this.props.tags.length > 0 && (
              <div className="tags">
                {this.props.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            )}
            {this.props.collaborators.length > 0 && (
              <div className="collaborators">
                <span className="fa fa-users" aria-lable="collaborators" title="collaborators" />
                {this.props.collaborators.map((collaborator) => (
                  <a href={collaborator.link} title={collaborator.link}>{collaborator.name}</a>
                ))}
              </div>
            )}
          </div>
        </section>
        <div className="links">
          <div className="site-link">
            <a href={this.props.link}>Site <span className="fa fa-external-link" aria-hidden="true" /></a>
          </div>
          <div className="repo-link">
            <a href={this.props.github}>Repository <span className="fa fa-github" aria-hidden="true" /></a>
          </div>
          <div className="completeness">
            {(this.props.completeness*100)+'%'}
            <div
              style={{
                width: (this.props.completeness*100)+'%',
                backgroundColor: 'rgb('+Math.floor(145+110 * (1 - this.props.completeness))+','+ Math.floor(145+110 * (this.props.completeness))+',145)'
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  link: React.PropTypes.string,
  tags: React.PropTypes.arrayOf(React.PropTypes.string),
  github: React.PropTypes.string,
  completeness: React.PropTypes.number,
  collaborators: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    link: React.PropTypes.string,
  })),
  image: React.PropTypes.string,
};

Project.defaultProps = {
  tags: [],
  description: '',
  link: null,
  collaborators: [],
  github: 'https://github.com/znewton',
  completeness: 0.0,
  image: '',
};
