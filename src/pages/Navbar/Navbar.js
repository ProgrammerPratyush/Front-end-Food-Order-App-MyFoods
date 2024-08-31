document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.getElementById('logo-link');
    const profileSection = document.getElementById('profile-section');
    const signInButton = document.getElementById('sign-in-button');
    const cartDot = document.getElementById('cart-dot');
    const profileDropdown = document.getElementById('profile-dropdown');
    const logoutButton = document.getElementById('logout');
    
    const menuItems = document.querySelectorAll('.menu-item');
    let token = localStorage.getItem('token'); // Simulating token retrieval

    // Update menu item active state
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(menu => menu.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Check if user is logged in
    if (token) {
        signInButton.style.display = 'none';
        profileSection.style.display = 'block';
    }

    // Logout functionality
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        profileSection.style.display = 'none';
        signInButton.style.display = 'block';
        window.location.href = '/';
    });

    // Update cart dot visibility based on cart amount
    const getTotalCartAmount = () => {
        // Dummy function to simulate cart amount retrieval
        return 3; // Example value
    }

    if (getTotalCartAmount() === 0) {
        cartDot.style.display = 'none';
    } else {
        cartDot.style.display = 'block';
    }
});
