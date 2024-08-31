// Function to remove an item from the cart
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Refresh cart display
}

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const subtotalElement = document.getElementById('subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout-button');

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = ''; // Clear existing items

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.dataset.index = index; // Store index in data attribute
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-button">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price;
        });

        // Calculate delivery fee and total
        const deliveryFee = subtotal > 50 ? 0 : 5;
        const total = subtotal + deliveryFee;

        // Update subtotal, delivery fee, and total
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        deliveryFeeElement.textContent = `$${deliveryFee.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Event delegation for removing items
    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remove-button')) {
            const itemIndex = event.target.closest('.cart-item').dataset.index;
            removeItem(Number(itemIndex));
        }
    });

    // Event listener for checkout button
    checkoutButton.addEventListener('click', function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Cart is empty!');
            return;
        }
        alert('Proceeding to checkout!');
        localStorage.removeItem('cart'); // Clear cart after checkout
        updateCart(); // Refresh cart display
    });

    // Initial cart update
    updateCart();
});
