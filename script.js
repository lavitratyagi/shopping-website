var cartToggleButton = document.getElementById("cart-toggle-button");
var cartclosebutton = document.getElementById("cart-toggle-button.clicked");
var sidePanel = document.querySelector(".side-panel");
var cartOverlay = document.getElementById("cart-overlay");
var backgroundOverlay = document.getElementById("background-overlay");


var isClicked = false;


var wishlistIcons = document.querySelectorAll(".wishlist-icon i");

    wishlistIcons.forEach(function(icon) {
      icon.addEventListener("click", function() {
        icon.classList.toggle("far");
        icon.classList.toggle("fas");
      });
    });

    
cartToggleButton.addEventListener("click", function() {
  sidePanel.classList.toggle("open");
  if (!isClicked) {
    cartToggleButton.classList.add("clicked");
    cartOverlay.style.display = sidePanel.classList.contains("open") ? "block" : "none";
    backgroundOverlay.style.display = sidePanel.classList.contains("open") ? "block" : "none";
    isClicked = true;
  } else {
    cartToggleButton.classList.remove("clicked");
    cartOverlay.style.display = "none";
    isClicked = false;
  }
});

// Listner for add to cart button
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const product = event.target.dataset.product;
  const price = event.target.dataset.price;
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cartItems.find((item) => item.product === product);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ product, price, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${product} added to cart!`);
}