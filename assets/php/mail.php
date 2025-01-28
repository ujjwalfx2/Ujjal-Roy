<?php
// Check for empty fields and validate email
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    exit;
}

$name = htmlspecialchars(strip_tags(trim($_POST['name'])));
$email_address = htmlspecialchars(strip_tags(trim($_POST['email'])));
$message = htmlspecialchars(strip_tags(trim($_POST['message'])));

// Email details
$to = "ujjwalfx@gmail.com"; // Replace with your email address
$email_subject = "Website Contact Form: $name";
$email_body = "You have received a new message from your website contact form.\n\n".
              "Here are the details:\n\n".
              "Name: $name\n".
              "Email: $email_address\n".
              "Message:\n$message\n";

// Headers
$headers = "From: ujjwalfx@gmail.com\r\n"; // Use a valid domain email for "From"
$headers .= "Reply-To: $email_address\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if(mail($to, $email_subject, $email_body, $headers)) {
    echo "Thank You! -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
} else {
    echo "Failed to send email. Please try again later.";
}
?>