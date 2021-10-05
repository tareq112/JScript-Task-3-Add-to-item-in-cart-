const productlist = document.querySelector('.products-container');
const productArr = document.querySelector('.products');
const cartitems = document.querySelector('.cartDetails');
const subTotal = document.querySelector('.subTotal');
const taxP = document.querySelector('.tax');
const total = document.querySelector('.total');







// render produts array
function renderProducts() {
  products.forEach((product) => {
    productlist.innerHTML += `
      <div class="product">
      <img src="${product.imgSrc}" alt="t-shirt 1" class="pimg">
      <p class="productName">${product.name}</p>
      <p class="productPrice">${product.price}</p>
      <input type="button" value="Add to Cart" class="btn" onclick="addToCart(${product.id})">
  </div>
      `;

  })
}
renderProducts();

// create cart array
let cart = [];
//click add button product to add 
function addToCart(id) {

  if (cart.some(item => item.id === id)) {
    alert("This Product Already in Cart");
  }
  else {
    const itemId = products.find((product) => product.id == id);
    cart.push(itemId);
    console.log(cart);
  }
  cartItems();
}

//cart item display in cart portion
function cartItems() {
  cartitems.innerHTML = " ";
  cart.forEach((item) => {
    cartitems.innerHTML += `
          <div class="item">
          <div><img src="${item.imgSrc}" alt="" class="addedProductsImg"></div>
          <div><p class="cartProductName">${item.name}</p></div>
          
          <div><p>${item.price}</p></div>
          <div><p><i class="fa fa-trash" aria-hidden="true" onclick="removeItem(${item.id})"></i></p></div>
      </div>
          `
  })
  calculatePrice();

}

//Delete item from a cart
function removeItem(id){

 cart = cart.filter( item => item.id != id);
 console.log(cart);

}


// calculate price
function calculatePrice(){
  let price = 0, items = 0;
  cart.forEach(item => {
    price+= item.price;
  })

  // price
  let x = price;
  //tax 
  let xtotal = ( x + (x*.05));

  let a = (x * .05);
   let b = xtotal - 10; 
  console.log(x);
  console.log(xtotal);
  
  
  subTotal.innerHTML =  x;
  taxP.innerHTML =  '+' + a.toFixed(2);
  total.innerHTML =  b.toFixed(2);
  

}



