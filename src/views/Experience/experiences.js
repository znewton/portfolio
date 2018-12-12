import React from 'react';
import ZendeskSupportScreencap from 'assets/ZendeskSupportScreencap.png';
import ISUWebThemeComp from 'assets/ISUWebThemeComp.png';

export default [
  {
    title: 'Zendesk',
    slides: [
      {
        body: (
          <div>
            <p>
              I spent the summer of 2018 interning at Zendesk in San Francisco
              as a Front-end software engineer
            </p>
          </div>
        ),
        image: {
          src:
            'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          alt: 'The golden gate bridge shrouded by fog',
        },
      },
      {
        body: (
          <div>
            <p>
              I worked on team Harrier where my responsibilities included
              product-wide optimizations, increasing unit test coverage, and
              converting Ember.js components to React.js.
            </p>
          </div>
        ),
        image: {
          src: 'https://s.hdnux.com/photos/33/07/32/7108236/3/rawImage.jpg',
          alt: 'An upward facing view of the 1019 Market St Zendesk office',
        },
      },
      {
        body: (
          <div>
            <p>
              Mid-internship, there was a production freeze to focus on
              performance and stability improvements in the Support product. My
              contribution to this effort was reducing the server load of one
              endpoint from 45 compute-days/day to 4 compute-days/day (a 10x
              improvement)!
            </p>
          </div>
        ),
        image: {
          src: ZendeskSupportScreencap,
          alt: 'The golden gate bridge shrouded by fog',
        },
      },
    ],
  },
  {
    title: 'Workiva',
    slides: [
      {
        body: (
          <div>
            <p>
              In the summer of 2017 I interned as a Software Engineer at Workiva
              in Ames, IA.
            </p>
          </div>
        ),
        image: {
          src:
            'http://engineeredcontrols.com/wp-content/uploads/2016/03/Workiva4.jpg',
          alt: 'The back of the Workiva Headquarters in Ames, IA',
        },
      },
      {
        body: (
          <div>
            <p>
              I worked in the Enterprise Product Line on the Workspaces team
              doing primarily front-end, feature development tasks. We used{' '}
              <a href="https://workiva.github.io/over_react/">OverReact</a> (
              <a href="https://reactjs.org">React</a> +{' '}
              <a href="https://www.dartlang.org/">Dart</a>) to quickly and
              confidently build Admin features for the new{' '}
              <a href="https://success.workiva.com/help/workspaces/using-workspaces/introduction-to-workspaces">
                Wdesk Workspaces
              </a>
              .
            </p>
          </div>
        ),
        image: {
          src:
            'https://success.workiva.com/help/assets/img/workspaces/create-a-workspace-1.gif',
          alt: 'Wdesk workspaces in use',
        },
      },
      {
        body: (
          <div>
            <p>
              One of my favorite projects on the Workspace team was building a
              color picker that allows Workspace admins to choose their theme
              color. This was a fun project for me because it was mostly from
              scratch instead of the usual workflow of coercing the pre-built
              WebSkin React components into what is desired.
            </p>
          </div>
        ),
        image: {
          src:
            'https://success.workiva.com/help/assets/img/workspaces/workspace-settings-2.png',
          alt: 'A screenshot of the open color picker',
        },
      },
    ],
  },
  {
    title: 'ISU WebDev',
    slides: [
      {
        body: (
          <div>
            <p>
              The month I switched from Aerospace to Software Engineering, I got
              a job at ISU WebDev as a Part-time Applications developer where I
              worked 15-20 hour weeks during the school year and 40 hour weeks
              during the summer for about a year and a half.
            </p>
          </div>
        ),
        image: {
          src:
            'https://media.graytvinc.com/images/Iowa_State_University_campus.jpg',
          alt:
            'The front of the administrative services building where I worked',
        },
      },
      {
        body: (
          <div>
            <p>
              My favorite project while at ISU WebDev was helping Zak Bell
              redesign the{' '}
              <a href="https://www.theme.iastate.edu/">
                official Iowa State University theme
              </a>
              . We had two main goals when approaching the redesign: (1) create
              a modern and aesthetically pleasing template for all ISU websites
              and (2) meet WCAG 2.0 accessibility standards in every way
              possible (colors, keyboard controls, audio indication, etc.).
            </p>
          </div>
        ),
        image: {
          src: ISUWebThemeComp,
          alt: 'Old ISU Theme compared to new ISU Theme',
        },
      },
    ],
  },
];
