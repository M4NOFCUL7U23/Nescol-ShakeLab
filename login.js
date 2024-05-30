document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = e.target.elements['email'].value;
    const password = e.target.elements['pswd'].value;

    // Retrieve the encrypted data from local storage
    const ciphertext = localStorage.getItem('user');

    if (ciphertext) {
        // Decrypt the user data
        const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret-key');
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        // Check if the email and password match
        if (decryptedData.email === email && decryptedData.password === password) {
            alert('Login successful! Redirecting to homepage...');
            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect to homepage after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }

    // Clear the form
    e.target.reset();
});
