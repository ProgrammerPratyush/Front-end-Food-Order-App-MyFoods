document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const orderId = urlParams.get('orderId');
    
    const apiUrl = 'https://example.com'; // Replace with your API base URL

    const verifyPayment = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/order/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ success, orderId })
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = '/myorders';
            } else {
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            window.location.href = '/';
        }
    };

    verifyPayment();
});
