document.addEventListener('DOMContentLoaded', function() {
    const ordersContainer = document.getElementById('orders-container');
    const url = 'YOUR_BACKEND_URL';  // Replace with your backend URL
    const token = 'YOUR_AUTH_TOKEN'; // Replace with the actual token
    const assets = {
        parcel_icon: 'path/to/your/parcel_icon.png'  // Replace with the correct path
    };

    // Function to fetch orders
    async function fetchOrders() {
        try {
            const response = await fetch(url + "/api/order/userorders", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            const orders = result.data;
            renderOrders(orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    // Function to render orders
    function renderOrders(orders) {
        ordersContainer.innerHTML = '';
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'my-orders-order';
            orderElement.innerHTML = `
                <img src="${assets.parcel_icon}" alt="Parcel Icon">
                <p>${order.items.map((item, index) => (
                    index === order.items.length - 1 ? 
                    `${item.name} x ${item.quantity}` : 
                    `${item.name} x ${item.quantity}, `
                )).join('')}</p>
                <p>$${order.amount}.00</p>
                <p>Items: ${order.items.length}</p>
                <p><span>&#x25cf;</span> <b>${order.status}</b></p>
                <button class="track-order-button">Track Order</button>
            `;
            orderElement.querySelector('.track-order-button').addEventListener('click', fetchOrders);
            ordersContainer.appendChild(orderElement);
        });
    }

    // Fetch orders on page load
    if (token) {
        fetchOrders();
    }
});
