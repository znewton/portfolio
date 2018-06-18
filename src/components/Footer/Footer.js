import React, { Component } from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/fontawesome-pro-solid';
import {
  faFacebook,
  faLinkedin,
  faGithubSquare
} from '@fortawesome/fontawesome-free-brands';

const phone = '(612)275-9524';
const email = 'znewton@iastate.edu';
const facebook = '/zach.newton.16';
const linkedin = '/zacharysnewton';
const github = '/znewton';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__section">
          <div className="Footer__section-row">
            <FontAwesomeIcon icon={faPhone} /> Phone:{' '}
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="Footer__section-row">
            <FontAwesomeIcon icon={faAt} /> Email:{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="Footer__section-row">
            <FontAwesomeIcon icon={faFacebook} /> Facebook:{' '}
            <a href={`https://www.facebook.com${facebook}`}>{facebook}</a>
          </div>
          <div className="Footer__section-row">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{' '}
            <a href={`https://www.linkedin.com/in${linkedin}`}>{linkedin}</a>
          </div>
          <div className="Footer__section-row">
            <FontAwesomeIcon icon={faGithubSquare} /> GitHub:{' '}
            <a href={`https://github.com${github}`}>{github}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
