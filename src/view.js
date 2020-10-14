const main = document.querySelector('main');
const view = {
  showLanding() {
    main.innerHTML = '';
    main.insertAdjacentHTML(
      'afterbegin',
      `
 <header>
 <div class="background">
 </div>
 <div class="header-text">
   <h2>COFFEE HOUSE</h2>
   <h4>Serving only the best since 2013</h4>
   <button class="btn-menu ">Full menu</button>
 </div>
</header>
<!-- contenido que cambiará con javascript -->
<section class="special-menu">
 <div class="special-menu-text">
   <h2>We Believe In Coffee That Tastes Incredible</h2>
   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
     aperiam, eaque ipsa quae ab illo.</p>
 </div>
 <div class="menu-wrapper">
   <article>
     <img class="coffee-image" src="./images/coffee-item-2.png" alt="">
     <h3>MOCHA LATTE</h3>
     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
   </article>
   <article>
     <img class="coffee-image" src="./images/coffee-item-1.png" alt="">
     <h3>POUR OVER</h3>
     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
   </article>
   <article>
     <img class="coffee-image" src="./images/coffee-item-3.png" alt="">
     <h3>ESPRESSO</h3>
     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
   </article>
 </div>
</section>

    `
    );
  },
  showHome() {
    main.innerHTML = '';
    main.insertAdjacentHTML('afterbegin', `
    <div class="menu-drinks">
        <div class="menu-drinks-text">
          <h2>Drink Menu</h2>
          <p>Vulputate massa nec feugiat fringilla. Fusce at euismod augue. Maecenas quis leotit lectus vestibulum
            interdum. Ut ut rhoncus risus, nec viverra nisl. Curabitur vitae nulla id eros interdum egestas ac sed odio.
          </p>
        </div>
      </div>

      <div class="menu-coffee">
        <article>
          <img class="coffee-image" src="./images/coffee-item-1.png" alt="">
          <h3>Black Coffee</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-3.png" alt="">
          <h3>Espresso</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-4.png" alt="">
          <h3>Latte</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-5.png" alt="">
          <h3>Brownie Mocha</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-6.png" alt="">
          <h3>Macchiato</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
      </div>

      <div class="menu-food">
        <div class="menu-food-text">
          <h2>Food Menu</h2>
          <p>Vulputate massa nec feugiat fringilla. Fusce at euismod augue. Maecenas quis leotit lectus vestibulum
            interdum. Ut ut rhoncus risus, nec viverra nisl. Curabitur vitae nulla id eros interdum egestas ac sed odio.
          </p>
        </div>
      </div>

      <div class="menu-pastries">
        <article>
          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">
          <h3>Chocolate Cakes</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">
          <h3>Macarons</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text">$4</p>
        </article>
        <article>
          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">
          <h3>Cupcakes</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p class="price-text" id="oinomas">$4</p>
        </article>
      </div>
    `)
  } 
};

export {view};