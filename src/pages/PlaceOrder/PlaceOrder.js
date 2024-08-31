document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('place-order-form');
    const subtotalElement = document.getElementById('subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const totalElement = document.getElementById('total');

    let cartItems = {}; // Simulated cart items
    let foodList = []; // Simulated food list
    let token = localStorage.getItem('token'); // Simulated token retrieval
    let url = "https://example.com"; // Base URL for API

    const getTotalCartAmount = () => {
        // Simulate cart total calculation
        return Object.values(cartItems).reduce((sum, quantity) => sum + (quantity * 10), 0); // Example item price of 10
    }

    const updateCartTotals = () => {
        const subtotal = getTotalCartAmount();
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + 2).toFixed(2)}`;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipcode: document.getElementById('zipcode').value,
            country: document.getElementById('country').value,
            phone: document.getElementById('phone').value
        };

        let orderItems = foodList.filter(item => cartItems[item._id] > 0).map(item => ({
            ...item,
            quantity: cartItems[item._id]
        }));

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2
        };

        try {
            const response = await fetch(`${url}/api/order/place`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (result.success) {
                const { session_url } = result;
                window.location.replace(session_url);
            } else {
                alert('Error placing order');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error placing order');
        }
    });

    updateCartTotals(); // Update totals on page load
});
