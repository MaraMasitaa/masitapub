// Select all add to cart buttons
var addToCartButtons = document.querySelectorAll('.cardl button');

// Add click event listener to each button
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
});

// Function to handle adding product to cart
function addToCart(event) {
    var button = event.target;
    var card = button.parentElement.parentElement;
    var productName = card.querySelector('h1').innerText;
    var productPrice = card.querySelector('.price').innerText;

    // Create an object for the product
    var cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if cart already exists in local storage
    var cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

    // Check if product is already in cart
    var productAlreadyInCart = false;
    cartItems.forEach(function(item) {
        if (item.name === cartItem.name) {
            item.quantity++;
            productAlreadyInCart = true;
        }
    });

    // If product is not in cart, add it
    if (!productAlreadyInCart) {
        cartItems.push(cartItem);
    }

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally, provide user feedback (e.g., show a confirmation message)
    alert('Product added to cart!');
}
// Function to update the cart icon with the number of items
function updateCartIcon() {
  var cartIcon = document.getElementById('cart-icon');
  var cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

  // Calculate total quantity of items in cart
  var totalQuantity = 0;
  cartItems.forEach(function(item) {
      totalQuantity += item.quantity;
  });

  // Update cart icon text content with total quantity
  cartIcon.textContent = totalQuantity;
}

// Call updateCartIcon initially to display the correct quantity
updateCartIcon();

  // Get all the images
  const images = document.querySelectorAll('.scroll-container img');
  let currentImageIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Hide the current image
    images[currentImageIndex].style.opacity = '0';
    
    // Move to the next image or loop back to the first image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Show the next image after a short delay
    setTimeout(() => {
      images[currentImageIndex].style.opacity = '1';
    }, 500); // Adjust timing as needed
  }

  // Automatically show the next image every 3 seconds (adjust as needed)
  setInterval(showNextImage, 3000);
