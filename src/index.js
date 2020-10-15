import { controller } from './controller';
import { view } from './view';
import { db, model } from './model';

// db.collection("Comments").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });

const menuOptions = document.querySelectorAll('#menu-options');
const btnMenu = document.querySelector('.btn-menu');

[...menuOptions].map((option) => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const menuSelected = e.target.textContent;

    if (menuSelected === 'Home') {
      controller.showHome();
      btnMenu.addEventListener('click', (e) => {
        e.preventDefault();
        controller.showMenu();
      });
    } else if (menuSelected === 'Menu') {
      controller.showMenu();
    } else if (menuSelected === 'Opinions') {
      controller.showOpinions();
    }
  });
});

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  controller.showMenu();
});
