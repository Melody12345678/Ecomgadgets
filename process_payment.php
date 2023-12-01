<?php
// Ensure that the form is submitted using the POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the card number, expiry date, and CVV from the form
    $cardNumber = $_POST['card-number'];
    $expiryDate = $_POST['expiry-date'];
    $cvv = $_POST['cvv'];

    // Validate and process the payment (you may use a payment gateway library here)

    // For demonstration purposes, you can simply display a success message
    echo "Payment Successful!";
} else {
    // Handle invalid requests or direct access to this script
    echo "Invalid Request";
}
?>
