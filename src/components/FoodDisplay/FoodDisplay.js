document.addEventListener('DOMContentLoaded', function() {
    const foodList = [
        { id: 1, category: 'Pizza', name: 'Margherita', description: 'Classic cheese and tomato pizza', price: 10.00, image: 'food_2.png' },
        { id: 2, category: 'Burgers', name: 'Cheeseburger', description: 'Juicy burger with cheese', price: 8.00, image: 'burger.jpg' },
        { id: 3, category: 'Drinks', name: 'Coca Cola', description: 'Refreshing cola drink', price: 2.00, image: 'coke.jpg' },
        { id: 4, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pepperoni pizza', price: 12.00, image: 'pepperoni.jpg' },
        { id: 5, category: 'Burgers', name: 'Veggie Burger', description: 'Healthy veggie burger', price: 7.00, image: 'veggie_burger.jpg' }
    ];

    const category = "All"; // Or set this dynamically based on user selection
    const foodDisplayList = document.querySelector('.food-display-list');

    foodList.forEach(item => {
        if (category === "All" || category === item.category) {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';

            foodItem.innerHTML = `
                <div class="food-item-img-container">
                    <img class="food-item-image" src="${item.image}" alt="${item.name}">
                    <img class="add" src="path/to/add_icon_white.png" alt="Add to Cart">
                    <div class="food-item-counter">
                        <img src="path/to/remove_icon_red.png" alt="Remove from Cart">
                        <p>1</p>
                        <img src="path/to/add_icon_green.png" alt="Add More">
                    </div>
                </div>
                <div class="food-item-info">
                    <div class="food-item-name-rating">
                        <p>${item.name}</p>
                        <img src="path/to/rating_stars.png" alt="Rating Stars">
                    </div>
                    <p class="food-item-desc">${item.description}</p>
                    <p class="food-item-price">$${item.price.toFixed(2)}</p>
                </div>
            `;

            foodDisplayList.appendChild(foodItem);
        }
    });

    // Add interactivity for adding/removing items from the cart
    const addButtons = document.querySelectorAll('.add');
    const removeButtons = document.querySelectorAll('.food-item-counter img[src*="remove_icon_red"]');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Logic to add item to cart
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Logic to remove item from cart
        });
    });
});
