document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = e.target.elements['txt'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['pswd'].value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Encrypt the user data
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userData), 'secret-key').toString();

    // Store the encrypted data in local storage
    localStorage.setItem('user', ciphertext);

    // Display success message
    document.getElementById('success-message').style.display = 'block';

    // Redirect to homepage after 3 seconds
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clear the form
    e.target.reset();
});
