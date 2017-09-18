import React, { Component } from 'react';

import myx from '../../assets/Myx.PNG';
import lyricprof from '../../assets/lyricprof.png';
import cygames from '../../assets/cygames.png';
import mnewga from '../../assets/mnewga.png';
import beer from '../../assets/beer.png';

module.exports = [
  {
    name: 'myx',
    description: 'Personal project to ease the process of combining YouTube playlists.',
    link: 'https://myxx.znewton.xyz',
    tags: ['web', 'app', 'javascript', 'scss', 'html', 'React', 'NodeJS', 'firebase'],
    github: 'https://github.com/znewton/myxx-client',
    completeness: 1.0,
    image: myx,
  },
  {
    name: 'LyricProf',
    description: 'HackISU Spring 2016 project to ease the process of checking a song\'s profanity',
    link: 'https://lyricprof.znewton.xyz',
    tags: ['web', 'app', 'javascript', 'css', 'html', 'php'],
    github: 'https://github.com/znewton/lyricprof',
    completeness: 1.0,
    image: lyricprof,
  },
  {
    name: 'CyGames',
    description: 'A multiplayer game and chat site built for SE 339',
    link: 'http://cygamez.herokuapp.com',
    tags: ['web', 'app', 'javascript', 'scss', 'html', 'NodeJS', 'React', 'firebase', 'socket.io'],
    github: 'https://github.com/znewton/cygames',
    completeness: 0.7,
    collaborators: [{name: 'Nick Behrens', link: 'https://nab0310.github.io/'}],
    image: cygames,
  },
  {
    name: 'MNEWGA Site Redesign',
    description: (<div>
      A website redesign for my aunt. Ended up not being used, but it was a fun exercise. <br />
      Plus, they used my design concepts! <a href="https://www.mnewga.com/">Actual Site</a>
    </div>),
    link: 'http://mnewga.znewton.xyz',
    tags: ['web', 'site', 'javascript', 'css', 'html', 'React'],
    github: 'https://github.com/znewton/mnewga-Site-Redesign',
    completeness: 0.9,
    image: mnewga,
  },
  {
    name: 'Beer',
    description: 'A simple website for my dad to use to show what beer he has (he always supplies the beer) at family gatherings.',
    tags: ['web', 'site', 'javascript', 'html', 'css'],
    github: 'https://github.com/znewton/beer',
    completeness: 0.9,
    image: beer,
  },
  {
    name: 'uniPrint',
    description: 'HackISU Spring 2017 project that fell apart very quickly on day 2. Will be revisited soon.',
    tags: ['web', 'app', 'typescript', 'Angular', 'css', 'Angular Material', 'firebase'],
    github: 'https://github.com/znewton/uniPrint',
    completeness: 0.1,
    collaborators: [
      {name: 'Tristan Duyvejonck', link: 'https://duyve.com/'},
      {name: 'Micheal Phippen', link: 'https://phippen.github.io/'},
      {name: 'Cole Mulligan', link: 'https://github.com/cmulligan7'},
    ],
    image: '',
  }
];
