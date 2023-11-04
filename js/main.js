const menu = document.querySelector('.menu-bar-container');
const navbar = document.querySelector('header .navbar ul');

menu.addEventListener('click', () => {
        if (navbar.style.width === "0px") {
            menu.classList.add("change");
            navbar.style.width = "300px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          } else {
            navbar.style.width = "0";
            menu.classList.remove("change");
            document.body.style.backgroundColor = "white";
          }
        
});
