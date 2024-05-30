const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}


setInterval(nextSlide, 1500); // Change slide every 1.5 seconds

document.addEventListener('DOMContentLoaded', function() {
  const addToBasketButtons = document.querySelectorAll('.add-to-basket');
  const basketItemsList = document.getElementById('basket-items');
  const totalCostDisplay = document.getElementById('total-cost');
  const checkoutBtn = document.getElementById('checkout-btn');
  let basketItems = [];

  // Function to update the basket
  function updateBasket() {
    basketItemsList.innerHTML = "";
    let totalCost = 0;
    basketItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.size} - £${item.price.toFixed(2)}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        basketItems = basketItems.filter(i => i !== item);
        updateBasket();
      });
      listItem.appendChild(removeButton);
      basketItemsList.appendChild(listItem);
      totalCost += item.price;
    });
    totalCostDisplay.textContent = `Total: £${totalCost.toFixed(2)}`;
  }

  // Event listener for add to basket buttons
  addToBasketButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemSize = button.textContent.split(" ")[1];
      const itemPrice = parseFloat(button.textContent.match(/£(\d+\.\d+)/)[1]);
      basketItems.push({ size: itemSize, price: itemPrice });
      updateBasket();
    });
  });

  // Handle checkout button click
  checkoutBtn.addEventListener('click', function() {
    // Store the basket items in local storage
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    // Store the total cost in local storage
    localStorage.setItem('totalCost', totalCostDisplay.textContent.split(" ")[1]);
    // Redirect users to the checkout screen
    window.location.href = 'checkoutpage.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const addToBasketButtons = document.querySelectorAll('.add-to-basket1');
  const basketItems = document.getElementById('basket-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  let totalCost = 0; // To keep track of the total cost

  // Function to handle adding items to basket
  function addToBasket1(event) {
    // Get the item details from the button's text
    const itemDetails = event.target.textContent;
    const price = parseFloat(itemDetails.match(/£(\d+\.\d+)/)[1]); // Extract the price

    // Create a new list item for the basket
    const listItem = document.createElement('li');
    listItem.textContent = itemDetails;

    // Add the new list item to the basket
    basketItems.appendChild(listItem);

    // Update the total cost
    totalCost += price;
    document.getElementById('total-cost').textContent = "Total: £" + totalCost.toFixed(2); // Assuming you have an element with id 'total-cost' to display the total cost
  }

  // Add click event listener to each "Add to Basket" button
  addToBasketButtons.forEach(button => {
    button.addEventListener('click', addToBasket1);
  });

  // Handle checkout button click
  checkoutBtn.addEventListener('click', function() {
    // Store the total cost in local storage
    localStorage.setItem('totalCost', totalCost.toFixed(2));

    // Redirect users to the checkout screen (replace 'checkout.html' with your actual checkout page URL)
    window.location.href = 'checkoutpage.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const addToBasketButtons = document.querySelectorAll('.add-to-basket2');
  const basketItems = document.getElementById('basket-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  let totalCost = 0; // To keep track of the total cost

  // Function to handle adding items to basket
  function addToBasket2(event) {
    // Get the item details from the button's text
    const itemDetails = event.target.textContent;
    const price = parseFloat(itemDetails.match(/£(\d+\.\d+)/)[1]); // Extract the price

    // Create a new list item for the basket
    const listItem = document.createElement('li');
    listItem.textContent = itemDetails;

    // Add the new list item to the basket
    basketItems.appendChild(listItem);

    // Update the total cost
    totalCost += price;
    document.getElementById('total-cost').textContent = "Total: £" + totalCost.toFixed(2); // Assuming you have an element with id 'total-cost' to display the total cost
  }

  // Add click event listener to each "Add to Basket" button
  addToBasketButtons.forEach(button => {
    button.addEventListener('click', addToBasket2);
  });

  // Handle checkout button click
  checkoutBtn.addEventListener('click', function() {
    // Store the total cost in local storage
    localStorage.setItem('totalCost', totalCost.toFixed(2));

    // Redirect users to the checkout screen (replace 'checkout.html' with your actual checkout page URL)
    window.location.href = 'checkoutpage.html';
  });
});



$("input[name='expiry-data']").mask("00 / 00");

function confirmPayment(event) {
    // Generate a random order number
    var orderNumber = Math.floor(Math.random() * 1000000);
    
    // Create and display the notification
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<p>Payment Successful</p><p>Order Number: ' + orderNumber + '</p>';

    // Append the notification to the body
    document.body.appendChild(notification);

    // Remove the notification after 5 seconds
    setTimeout(function() {
        notification.remove();
    }, 5000);
}

var basket = [
  { name: "Small Banana Milkshake", price: 2.00 },
  { name: "Medium Banana Milkshake", price: 4.00 },
  { name: "Large Banana Milkshake", price: 6.00 },
  { name: "Small Strawberry Milkshake", price: 2.00 },
  { name: "Medium Strawberry Milkshake", price: 4.00 },
  { name: "Large Strawberry Milkshake", price: 6.00 },
  { name: "Small Oreo Milkshake", price: 2.00 },
  { name: "Medium Oreo Milkshake", price: 4.00 },
  { name: "Large Oreo Milkshake", price: 6.00 },
  { name: "Small Vanilla Milkshake", price: 2.00 },
  { name: "Medium Vanilla Milkshake", price: 4.00 },
  { name: "Large Vanilla Milkshake", price: 6.00 },
];

document.getElementById("login-link").addEventListener("click", function(event){
    event.preventDefault();
    // Show login form or redirect to login page
    // Example: window.location.href = "login.html";
});

document.getElementById("register-link").addEventListener("click", function(event){
    event.preventDefault();
    // Show registration form or redirect to registration page
    // Example: window.location.href = "registration.html";
});