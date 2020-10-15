import { view } from './view';
import { model } from './model';

const controller = {
  showHome() {
    view.showHome();
    const btnMenu = document.querySelector('.btn-menu');
    btnMenu.addEventListener('click', (e) => {
      e.preventDefault();
      controller.showMenu();
    });
  },
  showMenu() {
    view.showMenu();
  },
  showOpinions() {
    view.showForm();
    view.showOpinions();
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let name = form.nombre.value;
      let comment = form.resenia.value;
      model.createDocument(name, comment);
      view.showOpinions();
    });
  },
};

export { controller };
