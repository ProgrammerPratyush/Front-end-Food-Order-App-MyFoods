document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('login-popup');
    const closePopup = document.getElementById('close-popup');
    const toggleLink = document.getElementById('toggle-link');
    const popupTitle = document.getElementById('popup-title');
    const nameInput = document.getElementById('name-input');
    const submitButton = document.getElementById('submit-button');
    const toggleStateText = document.getElementById('toggle-state');

    let isLoginState = false;

    // Close popup
    closePopup.addEventListener('click', function() {
        window.location.href = '/index.html';
    });

    // Toggle between Login and Sign-Up
    toggleLink.addEventListener('click', function() {
        isLoginState = !isLoginState;
        if (isLoginState) {
            popupTitle.textContent = 'Login';
            nameInput.style.display = 'none';
            submitButton.textContent = 'Login';
            toggleStateText.innerHTML = 'Create a new account? <span id="toggle-link">Click here</span>';
        } else {
            popupTitle.textContent = 'Sign-Up';
            nameInput.style.display = 'block';
            submitButton.textContent = 'Create Account';
            toggleStateText.innerHTML = 'Already have an account? <span id="toggle-link">Login here</span>';
        }
    });

    // Handle form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const url = isLoginState ? '/api/user/login' : '/api/user/register';
        const data = {
            name: document.getElementById('name-input').value,
            email: document.getElementById('email-input').value,
            password: document.getElementById('password-input').value
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.token);
                loginPopup.style.display = 'none';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
