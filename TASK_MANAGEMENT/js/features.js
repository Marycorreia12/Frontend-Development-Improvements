const accordion = document.querySelectorAll('li');

accordion.forEach(item => {
    item.addEventListener('click', () =>{
        item.classList.toggle('text-show');

        const text = item.firstElementChild;
        if (text.style.display === "block") {
            text.style.display = "none";
            item.style.background = "#FFFFFF";
          } else {
            text.style.display = "block";
            item.style.background = "#FBE3E0";
          }

          if (text.style.maxHeight) {
            text.style.maxHeight = null;
          } else {
            text.style.maxHeight = text.scrollHeight + "px";
          } 
    })
})
