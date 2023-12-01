const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port you prefer

// Middleware to parse JSON in request bodies
app.use(bodyParser.json());

// Product data (replace with a database in a real-world scenario)
const products = [
    { id: 1, name: 'Laptop', price: 799.99, image: 'laptop.jpeg' },
    { id: 2, name: 'Camera', price: 599.99, image: 'camera.jpeg' },
    { id: 3, name: 'Earphones', price: 199.99, image: 'earphones.jpeg' },
    { id: 4, name: 'Kindle', price: 799.99, image: 'kindle.jpeg' },
    { id: 5, name: 'Loudspeakers', price: 499.99, image: 'loudspeakers.jpeg' },
    { id: 6, name: 'Router', price: 399.99, image: 'router.jpeg' },
    { id: 7, name: 'Smartphone', price: 199.99, image: 'smartphone.jpeg' },
    { id: 8, name: 'Smartwatch', price: 149.99, image: 'smartwatch.jpeg' },
    { id: 9, name: 'Tablet', price: 349.99, image: 'tablet.jpeg' },
    { id: 10,name: "USBdrive",price: 49.99, image: "usbdrive.jpeg" },
    // Add more products as needed
];

// Shopping cart data
let shoppingCart = [];

// Endpoint to get product data
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to handle adding a product to the shopping cart
app.post('/api/addToCart', (req, res) => {
  const productId = req.body.productId;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  shoppingCart.push(product);
  res.json({ message: 'Product added to cart successfully', cart: shoppingCart });
});

// Endpoint to get shopping cart data
app.get('/api/cart', (req, res) => {
  res.json(shoppingCart);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
