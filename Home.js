document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const foodDisplay = document.getElementById('food-display');
    let currentCategory = "All";

    // Function to render food items based on the current category
    function renderFoodItems() {
        foodDisplay.innerHTML = '';
        const filteredItems = currentCategory === "All" ? foodItems : foodItems.filter(item => item.category === currentCategory);
        filteredItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'food-item';
            itemElement.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            `;
            foodDisplay.appendChild(itemElement);
        });
    }

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            renderFoodItems();
        });
    });

    // Initial render of food items
    renderFoodItems();

    // Event listeners for other buttons
    document.getElementById('view-menu-button').addEventListener('click', function() {
        alert('Viewing the menu!');
    });

    document.getElementById('download-button').addEventListener('click', function() {
        alert('Downloading the app!');
    });

    // Redirect to LoginPopUp.html when Sign in button is clicked
    document.getElementById('sign-in-button').addEventListener('click', function() {
        window.location.href = 'LoginPopup.html';
    });
});

// Add to Cart function
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
}
