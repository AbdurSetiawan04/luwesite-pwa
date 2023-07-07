import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const app = new App({
  button: document.querySelector('#button'),
  drawer: document.querySelector('.nav-mob'),
  content: document.querySelector('#main-home'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
