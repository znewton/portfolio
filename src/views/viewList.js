import { Welcome, Projects, AboutMe, Experience } from 'views';

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
  about: {
    id: 'about-me',
    label: 'About',
    component: AboutMe
  }
};
