const accordion = document.querySelectorAll('li');
const menu = document.querySelector('.bi-list');
const closed = document.querySelector('.bi-x');
const navbar = document.querySelector('.nav');

(function openAccordion(){
  accordion.forEach(item => {
    item.addEventListener('click', () =>{
        item.classList.toggle('text-show');

        const text = item.firstElementChild;
        if (text.style.display === "block") {
            text.style.display = "none";
            item.style.background = "#FFFFFF";
            item.style.color = "#5B5555";
          } else {
            text.style.display = "block";
            item.style.background = "#7568FE";
            item.style.color = "#FFFFFF";
          }

          if (text.style.maxHeight) {
            text.style.maxHeight = null;
          } else {
            text.style.maxHeight = text.scrollHeight + "px";
          } 
    })
});
})()

  menu.addEventListener('click', () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
      closed.style.display = "block";
      navbar.style.display = "block";
      navbar.style.height = '35vh'
    } else {
      menu.style.display = "block";
      closed.style.display = "none";
      navbar.style.display = "none";
      navbar.style.height = '0'
    }
  })

  closed.addEventListener('click', () => {
    if (closed.style.display === "block") {
      closed.style.display = "none";
      menu.style.display = "block";
      navbar.style.display = "none";
      navbar.style.height = '0'
    } else {
      closed.style.display = "none";
      menu.style.display = "block";
      navbar.style.display = "block";
      navbar.style.height = '35vh'
    }
  });
