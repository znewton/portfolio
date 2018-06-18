import React from 'react';
import moment from 'moment';

import css_logo from 'assets/svg/CSS3_logo_and_wordmark.svg';
import dart_logo from 'assets/svg/dartlang-logo.svg';
import html_logo from 'assets/svg/HTML5_logo_and_wordmark.svg';
import java_logo from 'assets/svg/Java_Logo.svg';
import react_logo from 'assets/svg/React-icon.svg';
import linux_logo from 'assets/svg/Tux-simple.svg';
import js_logo from 'assets/svg/Unofficial_JavaScript_logo_2.svg';
import me from 'assets/BrewCrawl_smile_distance.jpg';

export default [
  {
    id: 'css',
    title: 'CSS',
    description: (
      <span>
        <p>
          I &#x2764;&#xfe0e; writing CSS. I often prefer it to messing around in
          Illustrator.
        </p>{' '}
        <blockquote>
          <p>Newton is a CSS God</p>
          <footer>
            &mdash; <a href="https://github.com/lilannie">Annie Steenson</a>
          </footer>
        </blockquote>
      </span>
    ),
    img: css_logo,
    wrapperProps: {
      diameter: 110,
      speed: 55
    },
    imgProps: {
      className: 'logo-md'
    }
  },
  {
    id: 'dart',
    title: 'Dartlang',
    description: (
      <span>
        I learned <a href="">Dart</a> during my internship at{' '}
        <a href="">Workiva</a> in 2017. I describe it as "java + javascript, but
        the good parts."
      </span>
    ),
    img: dart_logo,
    wrapperProps: {
      diameter: 85,
      speed: 45
    },
    imgProps: {
      className: 'logo-md'
    }
  },
  {
    id: 'html',
    title: 'HTML',
    description: (
      <span>
        <strong>Web</strong> is my platform of choice for making instantly
        accessible apps/content. The best part is the instant feedback when
        developing!
      </span>
    ),
    img: html_logo,
    imgProps: {
      className: 'logo-md'
    }
  },
  {
    id: 'java',
    title: 'Java',
    description: (
      <span>
        The <strong>first</strong> language I learned. <i>Fun fact:</i> I built{' '}
        <a href="https://github.com/znewton/FirstPlatformerGameEngine">
          a game engine
        </a>{' '}
        with it that I used to ask my date to senior prom.
      </span>
    ),
    img: java_logo,
    imgProps: {
      className: 'logo-md'
    }
  },
  {
    id: 'react',
    title: 'React',
    description: (
      <span>
        JavaScript + HTML in one framework? Sign me up. Started using this
        bundle of joy {moment('20161015', 'YYYYMMDD').fromNow()}!
      </span>
    ),
    img: react_logo
  },
  {
    id: 'me',
    title: 'Me on a brew crawl with friends',
    description: (
      <span>
        <p>Hi, I'm Zach. Welcome to my portfolio!</p>{' '}
        <p>
          Feel free to have a look around to learn more about me and what I do.
        </p>
      </span>
    ),
    img: me,
    wrapperProps: {
      hoverDiameter: 200,
      diameter: 200,
      speed: 65
    }
  },
  {
    id: 'linux',
    title: 'Linux (Tux)',
    description: (
      <span>
        Even though I use a Mac at work and own a Surface Book, Linux
        (particularly <a href="https://www.ubuntu.com/desktop">Ubuntu</a>) is my
        OS of choice. So customizable!
      </span>
    ),
    img: linux_logo,
    wrapperProps: {
      diameter: 75,
      speed: 40
    },
    imgProps: {
      className: 'logo-md'
    }
  },
  {
    id: 'js',
    title: 'JavaScript',
    description: (
      <span>
        My programming language of choice. The ease of connecting logic to
        visuals with JS and the DOM is unparalleled. Plus, there are{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_JavaScript_libraries">
          frameworks
        </a>
        and{' '}
        <a href="https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js">
          supersets
        </a>{' '}
        to cater to any need or mood!
      </span>
    ),
    img: js_logo,
    wrapperProps: {
      diameter: 125,
      speed: 60
    }
  }
];
