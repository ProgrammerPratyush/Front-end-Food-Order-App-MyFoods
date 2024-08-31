document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.footer-social-icons img');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const platform = this.alt.toLowerCase();
            if (platform === 'facebook') {
                window.open('https://www.facebook.com', '_blank');
            } else if (platform === 'twitter') {
                window.open('https://www.twitter.com', '_blank');
            } else if (platform === 'linkedin') {
                window.open('https://www.linkedin.com', '_blank');
            }
        });
    });
});
