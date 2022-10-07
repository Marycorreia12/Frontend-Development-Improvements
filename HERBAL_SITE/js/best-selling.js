const sellings = [
    {
        id: 0,
        name: 'Black Teas',
        price: 37.05,
        img: "./images/black-teas.svg",
    },
    {
        id: 1,
        name: 'Oolong Tea',
        price: 26.00,
        img: "./images/oolong-tea.svg",
    },
    {
        id: 2,
        name: 'Matcha',
        price: 21.00,
        img: "./images/matcha.svg",
    },
    {
        id: 3,
        name: 'Chamomile',
        price: 39.09,
        img: "./images/chamomile.svg",
    },
    
];

const sellingsEl = document.querySelector('.best-selling-container');

/* Render the products */
function renderBestProducts(){
    sellings.forEach(product => {
        sellingsEl.innerHTML += `
        <div class="swiper-slide slide">
            <img src="${product.img}" alt="Black Teas">
            <div>
                <h4>${product.name}</h4>
                <small class="price">${product.price}</small>
                <ul class="flex">
                    <li>100g</li>
                    <li>50 cups</li>
                    <li>Green Tea</li>
                </ul>
            </div>
        </div>`;
    });
} 

renderBestProducts();

new Swiper('.best-selling-contents', {
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