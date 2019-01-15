import React from 'react';

const projects = [
  {
    title: 'myx',
    description: (
      <div>
        During the summer of 2017, my main avenue of listening to music was
        through YouTube music curation channels such as{' '}
        <a href="https://www.youtube.com/user/koalakontrol">Koala Kontrol</a>{' '}
        and <a href="https://www.youtube.com/user/TheMistifyMusic">Mistify</a>.
        It's easy enough to individually listen to the playlists that those
        channels produce, but often I would wish I could listen to the playlists
        of multiple channels mixed together. And so, Myx was born to allow users
        to shuffle together any number of playlists from any number of YouTube
        channels.
      </div>
    ),
    stack: ['Firebase', 'YouTube API', 'NodeJS', 'React.js', 'SCSS'],
    github: 'https://github.com/znewton/myx-client',
    live: 'https://myx.znewton.xyz',
  },
  {
    title: 'lyricprof',
    description: (
      <div>
        In the fall of 2016, I entered the HackISU Midwest Hackathon in the ISU
        Research Park for my second year. My roommate at the time worked at the
        ISU student run radio station,{' '}
        <a href="http://www.kure.stuorg.iastate.edu/">
          88.5 KURE Ames Alternative
        </a>
        , and asked me if I could ease the process of checking if song lyrics
        were safe for the radio. Lyricprof was my solution to his and,
        apparently, <i>all</i> KURE radio DJs' problem of quickly checking songs
        for profanity. At the end of the hackathon, the app ended up winning the
        "Googliest Hack". Since then, KURE has started{' '}
        <a href="http://www.kure.stuorg.iastate.edu/dashboard/lyrics/index.php">
          hosting the app on their own site
        </a>
        .
      </div>
    ),
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/znewton/lyricprof',
    live: 'https://lyricprof.znewton.xyz',
  },
  {
    title: 'recipes',
    description: (
      <div>
        In the fall of 2018, after a year of taking cooking more and more
        seriously, my friends asked me to share my recipes with them before I
        graduated. Being a front-end web developer by hobby, it was only natural
        for me to make a searchable, static recipe site for all my friends to
        access.
      </div>
    ),
    stack: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/znewton/recipes',
    live: 'https://recipes.znewton.xyz',
  },
];

export default projects;
