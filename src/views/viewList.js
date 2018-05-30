import { Welcome, Resume, Projects, AboutMe, Experience } from 'views';

export default {
  welcome: {
    id: 'welcome',
    label: '',
    component: Welcome
  },
  experience: {
    id: 'experience',
    label: 'Experience',
    component: Experience
  },
  projects: {
    id: 'projects',
    label: 'Projects',
    component: Projects
  },
  resume: {
    id: 'resume',
    label: 'Resumé',
    component: Resume
  },
  about: {
    id: 'about-me',
    label: 'About',
    component: AboutMe
  }
};
