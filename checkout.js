function confirmPayment() {
            // Generate a random order number
            var orderNumber = Math.floor(Math.random() * 1000000);
            
            // Show confirmation message with order number and check mark
            var confirmationMessage = document.createElement('div');
            confirmationMessage.innerHTML = '<p>Thank you for your order!. Payment Successful</p><p>Order Number: ' + orderNumber + '</p><div class="checkmark"></div>';
            confirmationMessage.classList.add('confirmation');
            document.body.appendChild(confirmationMessage);
        }
document.querySelector('.input-field input').addEventListener('input', function(event) {
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    }
});
