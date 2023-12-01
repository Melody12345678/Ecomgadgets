
// Sample data for product ratings
let ratings = {};

// Function to update the average rating display
function updateAverageRating(productId) {
    const averageRatingElement = document.getElementById(`average-rating-${productId}`);
    const productRatings = ratings[productId] || [];
    const totalRating = productRatings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRating / productRatings.length || 0;
    averageRatingElement.textContent = averageRating.toFixed(1);
}

// Function to submit product rating
function submitRating(productId) {
    // Get the selected rating value
    const selectedRating = parseInt(document.getElementById(`rating-${productId}`).value);

    // Add the rating to the array
    if (!ratings[productId]) {
        ratings[productId] = [];
    }
    ratings[productId].push(selectedRating);

    // Update the average rating display
    updateAverageRating(productId);

    // Add logic to send the rating to the server or store it locally
    // For simplicity, we'll just log the rating to the console
    console.log(`Rating submitted for ${productId}: ${selectedRating}`);
}

// Function to submit a review
function submitReview() {
    // Get the review text
    const reviewText = document.getElementById('review-text').value;

    // Add logic to send the review to the server or store it locally
    // For simplicity, we'll just log the review to the console
    console.log(`Review submitted: ${reviewText}`);

    // Append the new review to the user-reviews section
    const userReviews = document.getElementById('user-reviews');
    const newReviewElement = document.createElement('div');
    newReviewElement.innerHTML = `<p>${reviewText}</p>`;
    userReviews.appendChild(newReviewElement);
}

// Function to add a product to the shopping cart
function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Create a new list item for the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${price.toFixed(2)}`;

    // Add the item to the cart
    cartItems.appendChild(cartItem);

    // Update the total price
    const currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + price).toFixed(2);

    // You can add additional logic here, such as updating the server-side cart
}

// Function to handle the checkout process
function checkout() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Display a confirmation message (in a real application, you'd likely redirect to a checkout page)
    alert(`Checkout successful! Total: $${totalElement.textContent}`);

    // Clear the cart and total
    cartItems.innerHTML = '';
    totalElement.textContent = '0.00';

    // You can add additional logic here, such as updating the server-side cart and processing the order
}

// Function to view product ratings (for demonstration purposes)
function viewRatings(productId) {
    const productRatings = ratings[productId] || [];
    alert(`Ratings for ${productId}: ${productRatings.join(', ')}`);
}
function processPayment() {
    // Here, you would typically send the payment details to your server for processing
    // and handle the response to show success or error messages to the user.
    alert("Payment processed successfully!");
    // Redirect to a thank-you page or perform other actions as needed.
}
// script.js
// Example: Change the thumbnail on click
const thumbnail = document.getElementById('thumbnail');
const newThumbnailPath = 'Gadgets.jpg';

thumbnail.addEventListener('click', function () {
    thumbnail.src = newThumbnailPath;
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.getElementById('productGrid');

    // Example product data (replace this with your actual product data)
    const products = [
        
        { id: 1, name: 'Laptop', price: 799.99, image: 'laptop.jpeg' },
        { id: 2, name: 'Camera', price: 599.99, image: 'camera.jpeg' },
        { id: 3, name: 'Earphones', price: 199.99, image: 'earphones.jpg' },
        { id: 4, name: 'Kindle', price: 799.99, image: 'kindle.jpeg' },
        { id: 5, name: 'Loudspeakers', price: 499.99, image: 'loudspeakers.jpeg' },
        { id: 6, name: 'Router', price: 399.99, image: 'router.jpeg' },
        { id: 7, name: 'Smartphone', price: 199.99, image: 'smartphone.jpeg' },
        { id: 8, name: 'Smartwatch', price: 149.99, image: 'smartwatch.jpeg' },
        { id: 9, name: 'Tablet', price: 349.99, image: 'tablet.jpeg' },
        { id: 10, name: 'USBdrive', price: 49.99, image: 'usbdrive.jpeg' },
        { id: 11, name: 'PS5', price: 55.99, image: 'ps5.jpeg' },
        { id: 12, name: 'Headphones', price: 66.99, image: 'Headphones.jpg' },

    ];
            // Add more products as needed
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)} USD</p>
        `
        productGrid.appendChild(productElement);

        // Add a column after each product (except the last one)
        if (index < products.length - 1) {
            const columnElement = document.createElement('div');
            columnElement.classList.add('column');
            productGrid.appendChild(columnElement);
        }
    });
});

// Example JavaScript function to add items to the cart
function addToCart(id, name, price) {
    // Assume you have a cartItems array to store added items
    const newItem = { id, name, price, quantity: 1 };
    cartItems.push(newItem);

    // Optionally, update the UI to reflect the changes (e.g., show a notification)
    updateCartUI();
}
// Example function to update the cart UI
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItems.length;
    }
}
// Example function to retrieve cart items from the URL query parameters
function getCartItemsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const cartItemsParam = urlParams.get('cartItems');
    return JSON.parse(cartItemsParam);
}
// Example function to retrieve cart items from local storage
function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem('cartItems');
    return JSON.parse(cartItemsJSON);
}
// Example function to display cart items on the checkout page
function displayCartItemsOnCheckout() {
    const cartItems = getCartItemsFromLocalStorage(); // Use the appropriate function to retrieve cart items
    // Display the cart items on the checkout page
}

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(name, price) {
        if (name && price) {
            const newItem = { name, price };
            cartItems.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            console.log('Item added to cart:', newItem);
        } else {
            console.error('Invalid product information');
        }
    }
});
