(()=>{"use strict";const e=document.querySelector("main"),n={showLanding(){e.innerHTML="",e.insertAdjacentHTML("afterbegin",'\n <header>\n <div class="background">\n </div>\n <div class="header-text">\n   <h2>COFFEE HOUSE</h2>\n   <h4>Serving only the best since 2013</h4>\n   <button class="btn-menu ">Full menu</button>\n </div>\n</header>\n\x3c!-- contenido que cambiará con javascript --\x3e\n<section class="special-menu">\n <div class="special-menu-text">\n   <h2>We Believe In Coffee That Tastes Incredible</h2>\n   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n     aperiam, eaque ipsa quae ab illo.</p>\n </div>\n <div class="menu-wrapper">\n   <article>\n     <img class="coffee-image" src="./images/coffee-item-2.png" alt="">\n     <h3>MOCHA LATTE</h3>\n     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n   </article>\n   <article>\n     <img class="coffee-image" src="./images/coffee-item-1.png" alt="">\n     <h3>POUR OVER</h3>\n     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n   </article>\n   <article>\n     <img class="coffee-image" src="./images/coffee-item-3.png" alt="">\n     <h3>ESPRESSO</h3>\n     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n   </article>\n </div>\n</section>\n\n    ')},showHome(){e.innerHTML="",e.insertAdjacentHTML("afterbegin",'\n    <div class="menu-drinks">\n        <div class="menu-drinks-text">\n          <h2>Drink Menu</h2>\n          <p>Vulputate massa nec feugiat fringilla. Fusce at euismod augue. Maecenas quis leotit lectus vestibulum\n            interdum. Ut ut rhoncus risus, nec viverra nisl. Curabitur vitae nulla id eros interdum egestas ac sed odio.\n          </p>\n        </div>\n      </div>\n\n      <div class="menu-coffee">\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-1.png" alt="">\n          <h3>Black Coffee</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-3.png" alt="">\n          <h3>Espresso</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-4.png" alt="">\n          <h3>Latte</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-5.png" alt="">\n          <h3>Brownie Mocha</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-6.png" alt="">\n          <h3>Macchiato</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n      </div>\n\n      <div class="menu-food">\n        <div class="menu-food-text">\n          <h2>Food Menu</h2>\n          <p>Vulputate massa nec feugiat fringilla. Fusce at euismod augue. Maecenas quis leotit lectus vestibulum\n            interdum. Ut ut rhoncus risus, nec viverra nisl. Curabitur vitae nulla id eros interdum egestas ac sed odio.\n          </p>\n        </div>\n      </div>\n\n      <div class="menu-pastries">\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">\n          <h3>Chocolate Cakes</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">\n          <h3>Macarons</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text">$4</p>\n        </article>\n        <article>\n          <img class="coffee-image" src="./images/coffee-item-9.png" alt="">\n          <h3>Cupcakes</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>\n          <p class="price-text" id="oinomas">$4</p>\n        </article>\n      </div>\n    ')}},i={showLanding(){n.showLanding()},showHome(){n.showHome()}};[...document.querySelectorAll("#menu-options")].map((e=>{e.addEventListener("click",(e=>{e.preventDefault();const n=e.target.textContent;"Landing"===n?i.showLanding():"Home"===n&&i.showHome()}))}))})();