import { controller } from './controller';
import { view } from './view';

const menuOptions = document.querySelectorAll('#menu-options');

[...menuOptions].map((option) => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const menuSelected = e.target.textContent;

    if (menuSelected === 'Landing') {
      controller.showLanding();
    } else if (menuSelected === 'Home') {
      controller.showHome();
    }
  });
});
