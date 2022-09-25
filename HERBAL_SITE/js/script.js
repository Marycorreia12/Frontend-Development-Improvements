(function(){
    const cardInfo = document.querySelector('.cards-info');
    const card = document.querySelector('.cards-container');

    cardInfo.addEventListener('click', () => {
        card.classList.toggle('show-cards-container');

    });
})();//Immediately invoke the function

//Add items to the cart
(function(){
    
    const cartBtn = document.querySelectorAll('.add-to-cart');
    cartBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            if(e.target.parentElement.classList.contains('add-to-cart')){
                let fullPath = e.target.parentElement.parentElement.previousElementSibling.src;
                console.log(fullPath);
                let pos = fullPath.indexOf('img') + 29;
                let partPath = fullPath.slice(pos);
                console.log(partPath);

            const item = {}
                item.img = `images${partPath}`;
                let name = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
                console.log(name);
                item.name = name;
                let price = e.target.parentElement.previousElementSibling.lastElementChild.textContent;
                console.log(price);
                
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;
                console.log(finalPrice);
                console.log(item);
                
                const cartItem = document.createElement('div');
                cartItem.classList.add("cards-items-container");
                cartItem.innerHTML += `
                        <div class="flex info">
                            <img src="${item.img}" alt="Fruit Tea Image" class="blends-image">
                            <strong class="strong">${item.name}</strong>
                            <img src="./images/Trash.svg" alt="Trash Image">
                        </div>
                        <div class="flex info-2">
                            <strong class="price">${item.price}</strong>
                            <p>Qtd: 2</p>
                        </div>
                `;
                const card = document.querySelector('.cards-container');
                const total1 = document.querySelector('.total-container');

                card.appendChild(cartItem);
                alert('Item added to the cart');
                showTotals();
            }
        }); 
    });

    //show totals
    function showTotals(){

        const total = [];
        const items = document.querySelectorAll(".cards-container .price");

        items.forEach((item) => {
            total.push(parseFloat(item.textContent));
        });
        console.log(total);

        const totalMoney = total.reduce((total, item) => {
            total+=item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        document.querySelector(".total-container span").textContent = `€ ${finalMoney}`;
        
        document.querySelector(".cards-info span").textContent = total.length;
    }
})();