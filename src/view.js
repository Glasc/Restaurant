import { model, db } from './model';

const main = document.querySelector('main');
const view = {
  showHome() {
    main.innerHTML = '';
    main.insertAdjacentHTML(
      'afterbegin',
      `
      <header>
      <div class="background">
      </div>
      <div class="header-text">
        <h2>El Cofy</h2>
        <h4>Servimos lo mejor desde el 2003</h4>
        <button class="btn-menu">Menú completo</button>
      </div>
    </header>
    <!-- contenido que cambiará con javascript -->
    <section class="special-menu">
      <div class="special-menu-text">
        <h2>Nuestro café sabe increíble</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo.</p>
      </div>
      <div class="menu-wrapper">
        <article>
          <img class="coffee-image" src="./images/coffee-item-2.png" alt="">
          <h3>MOCHA LATTE</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas
            commodi!</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-1.png" alt="">
          <h3>POUR OVER</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas
            commodi!</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-3.png" alt="">
          <h3>ESPRESSO</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas
            commodi!</p>
        </article>
      </div>
    </section>


    `
    );
  },
  showMenu() {
    main.innerHTML = '';
    main.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="menu-drinks">
        <div class="menu-drinks-text">
          <h2>Bebidas</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi
          </p>
        </div>
      </div>

      <div class="menu-coffee">
        <article>
          <img class="coffee-image" src="./images/coffee-item-1.png" alt="">
          <h3>Black Coffee</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-3.png" alt="">
          <h3>Espresso</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-4.png" alt="">
          <h3>Latte</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-5.png" alt="">
          <h3>Brownie Mocha</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-6.png" alt="">
          <h3>Macchiato</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
      </div>

      <div class="menu-food">
        <div class="menu-food-text">
          <h2>Postres</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi
          </p>
        </div>
      </div>

      <div class="menu-pastries">
        <article>
          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">
          <h3>Chocolate Cakes</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-8.png" alt="">
          <h3>Macarons</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-7.png" alt="">
          <h3>Cupcakes</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse cumque maiores ipsum voluptas commodi</p>
          <p class="price-text" id="oinomas">$4</p>
        </article>
      </div>
    `
    );
  },
  showForm() {
    main.innerHTML = '';
    main.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="opinion-container">
    <form action="">
      <div class="form-control">  
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre">
      </div>
      <div class="form-control">
        <label for="resenia">Reseña: </label>
        <textarea rows="3" cols="30" name="resenia" id="resenia"></textarea>
      </div>
      <div class="form-control">
        <p></p>
        <input type="submit" value="Publicar" id="btn-publicar">
      </div>
    </form>
  </div>

  <div class="opinion-wrapper">
    <div class="opinion">
      <h3>César de Jesús Funes Avila</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae veritatis quos modi quaerat saepe animi et qui ea, illo dolorem architecto aliquid corrupti laboriosam ducimus aut doloremque sit sapiente?</p>
    </div>
    <div class="opinion">
      <h3>César de Jesús Funes Avila</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam explicabo repudiandae veritatis quos modi quaerat saepe animi et qui ea, illo dolorem architecto aliquid corrupti laboriosam ducimus aut doloremque sit sapiente?</p>
    </div>
  </div>
    `
    );
  },
  showOpiniones() {
    const opinionWrapper = document.querySelector('.opinion-wrapper');
    opinionWrapper.innerHTML = '';

    db.collection('Comments')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          opinionWrapper.insertAdjacentHTML(
            'afterbegin',
            `
        <div class="opinion">
        <h3>${doc.data().name}</h3>
        <p>${doc.data().opinion}</p>
      </div>
        `
          );
        });
      });
  },
};

export { view };
