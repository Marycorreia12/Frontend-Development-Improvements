const users = [
    {
        id: 0,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar1.svg",
        country: 'USA'
    },
    {
        id: 1,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar2.svg",
        country: 'CANADA'
    },
    {
        id: 2,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar3.svg",
        country: 'FRANCE'
    },
    {
        id: 3,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar4.svg",
        country: 'USA'
    },
    {
        id: 4,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar5.svg",
        country: 'CANADA'
    },
    {
        id: 5,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar6.svg",
        country: 'FRANCE'
    },
    {
        id: 6,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar7.svg",
        country: 'USA'
    },
    {
        id: 7,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar8.svg",
        country: 'CANADA'
    },
    {
        id: 8,
        name: 'Ravi Shanker',
        text: 'Your teas are the best.Ordering is quickly, and unstressful.Theteas arrive on time and well packed with',
        img: "./images/avatar9.svg",
        country: 'FRANCE'
    },
    
    
]; 

const usersEl = document.querySelector('.users-contents');

function renderTestimonials(){
    fetch('https://633ea1f30dbc3309f3b9862b.mockapi.io/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            users.forEach(item => {
                usersEl.innerHTML += `
                <div class="swiper-slide contents">
                    <img src="${item.img}" alt="User">
                        <div>${item.text} 
                        <Strong>${item.name}r</Strong>
                        <small>${item.country}</small>
                        </div>
                </div>`;
            })
        });
    }

renderTestimonials();

new Swiper('.testimonials-contents', {
    slidesPerGroup: 4,
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: 'true',
    fade: 'true',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    
  });