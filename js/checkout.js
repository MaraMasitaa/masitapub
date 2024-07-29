document.addEventListener("DOMContentLoaded", function() {
    // Function to retrieve cart items from cookies
    function getCartItems() {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('listCart='));
        
        return cookieValue ? JSON.parse(cookieValue.split('=')[1]) : [];
    }

    // Function to dynamically populate cart items in HTML
    function populateCartItems() {
        const cartItemList = document.getElementById("cartItemList");
        cartItemList.innerHTML = ''; // Clear existing items

        const cartItems = getCartItems();
        cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");

            itemElement.innerHTML = `
                <img src="${item.image}">
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="price">$${item.price} / 1 product</div>
                </div>
                <div class="quantity">${item.quantity}</div>
                <div class="returnPrice">$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            cartItemList.appendChild(itemElement);
        });
    }

    // Call the function to populate cart items when the page loads
    populateCartItems();
});
