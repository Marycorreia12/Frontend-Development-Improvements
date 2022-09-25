const productsEl = document.querySelector('.blends-images');
const cartItemsEl = document.querySelector('.cards-items-container');
const subTotalEl = document.querySelector('.subTotal');
const totalItemsCart = document.querySelector(".cards-info .units");
const cardInfo = document.querySelector('.cards-info');
const card = document.querySelector('.cards-container');

cardInfo.addEventListener('click', () => {
    card.classList.toggle('show-cards-container');
});

/* Render the products */
function renderProducts(){
    products.forEach(product => {
        productsEl.innerHTML += `
        <div class="blends-image-container">
            <img src="${product.img}" alt="Fruit Tea Image" class="blends-image">
            <div class="blends-image-description">
                <div class="flex description">
                    <strong class="strong">${product.name}</strong>
                    <small class="price">${product.price}</small>
                </div>
                <span class="add-to-cart"><img src="./images/cart.png" alt="Cart Image" onClick="addToCart(${product.id})"></span>
                <span class="add-to-wishlist"><img src="./images/arrow_forward.svg" alt="Wishlist Image"></span>
            </div> 
        </div>
        `;
    })
} 

renderProducts();

/* Cart Array */
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

/* Render the items */
function renderCartItems(){
    cartItemsEl.innerHTML = ""; 
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="card-items">
            <div class="flex info">
                <img src="${item.img}" alt="Fruit Tea Image" class="blends-image">
                <strong class="strong">${item.name}</strong>
                <img src="./images/Trash.svg" alt="Trash Image" onclick="removeItems(${item.id})">
            </div>
            <div class="flex info-2">
                    <strong class="price">€ ${item.price}</strong>
                    <div class="buttons flex"> 
                        <div class="btn btn-minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="number-of-units">${item.numberOfUnits}</div>
                        <div class="btn btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                    </div>
            </div>
        <div>
        `; 
    });
}

/* Add to Cart */
function addToCart(id){
    //check if product already exists in the cart
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnits("plus", id)    
    } 
    else{
        const item =  products.find(product => product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1,});
    }
  updateCart();
}

/* Update cart */
function updateCart(){
    renderCartItems();
    renderSubtotal();

    /* Save cart to localStorage */
    localStorage.setItem("CART", JSON.stringify(cart));
}

/* Calculate and render subtotal */
function renderSubtotal(){
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subTotalEl.innerHTML = `
        Total (${totalItems} items): € ${totalPrice.toFixed(2)}`;
        totalItemsCart.innerHTML = totalItems;
}

/* Change number of units */
function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }
            else if(action === "plus" ){
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}

/* Remove Items */
function removeItems(id){
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}