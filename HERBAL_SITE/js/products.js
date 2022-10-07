const products = [
    {
        id: 0,
        name: 'White Peony',
        price: 37.05,
        img: "./images/white-peony.svg",
    },
    {
        id: 1,
        name: 'Exotic Tea',
        price: 26.00,
        img: "./images/exotic-tea.svg",
    },
    {
        id: 2,
        name: 'Yellow Tea',
        price: 21.00,
        img: "./images/yellow-tea.svg",
    },
    {
        id: 3,
        name: 'White Peony',
        price: 39.09,
        img: "./images/fruit-tea.svg",
    },
    
];

const productsEl = document.querySelector('.blends-images');

/* Render the products */
function renderProducts(){
    products.forEach(product => {
        productsEl.innerHTML += `
        <div class="swiper-slide blends-image-container">
            <img src="${product.img}" alt="Fruit Tea Image" class="blends-image">
            <div class="blends-image-description">
                <div class="flex description">
                    <strong class="strong">${product.name}</strong>
                    <small class="price">${product.price}</small>
                </div>
                <span class="add-to-cart"><img src="./images/cart.png" alt="Cart Image" onClick="addToCart(${product.id})"></span>
            </div> 
        </div>`;
    })
} 

renderProducts();

new Swiper('.blends-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1150: {
        slidesPerView: 4,
      },
    },
    
  });