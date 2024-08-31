document.addEventListener('DOMContentLoaded', function() {
    const cartItems = {}; // Store cart items (id: quantity)

    const addToCartButtons = document.querySelectorAll('.add');
    const removeFromCartButtons = document.querySelectorAll('.food-item-counter img[src*="remove_icon_red"]');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = '1'; // Replace with dynamic id
            if (!cartItems[itemId]) {
                cartItems[itemId] = 1;
            } else {
                cartItems[itemId]++;
            }
            updateCartDisplay(itemId);
        });
    });

    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = '1'; // Replace with dynamic id
            if (cartItems[itemId] && cartItems[itemId] > 0) {
                cartItems[itemId]--;
                if (cartItems[itemId] === 0) {
                    delete cartItems[itemId];
                }
                updateCartDisplay(itemId);
            }
        });
    });

    function updateCartDisplay(itemId) {
        const itemCounter = document.querySelector('.food-item-counter p');
        if (cartItems[itemId]) {
            itemCounter.textContent = cartItems[itemId];
        } else {
            itemCounter.textContent = '';
        }
    }
});
