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
  showOpiniones() {
    view.showForm();
    view.showOpiniones();
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let name = form.nombre.value;
      let comment = form.resenia.value;
      model.createDocument(name, comment);
      view.showOpiniones();
      form.reset();
    });
  },
};

export { controller };
