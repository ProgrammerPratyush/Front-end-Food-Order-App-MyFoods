document.addEventListener('DOMContentLoaded', function() {
    const menuList = [
        { menu_name: 'Pizza', menu_image: 'path/to/pizza_image.jpg' },
        { menu_name: 'Burger', menu_image: 'path/to/burger_image.jpg' },
        { menu_name: 'Pasta', menu_image: 'path/to/pasta_image.jpg' },
        // Add more menu items as needed
    ];

    const exploreMenuList = document.querySelector('.explore-menu-list');
    let currentCategory = "All";

    menuList.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'explore-menu-list-item';
        menuItem.innerHTML = `
            <img class="${currentCategory === item.menu_name ? 'active' : ''}" src="${item.menu_image}" alt="">
            <p>${item.menu_name}</p>
        `;
        menuItem.addEventListener('click', function() {
            currentCategory = (currentCategory === item.menu_name) ? "All" : item.menu_name;
            updateMenuList();
        });
        exploreMenuList.appendChild(menuItem);
    });

    function updateMenuList() {
        const items = exploreMenuList.querySelectorAll('.explore-menu-list-item img');
        items.forEach(img => {
            img.className = (currentCategory === img.nextElementSibling.textContent) ? 'active' : '';
        });
    }
});
