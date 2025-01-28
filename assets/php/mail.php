<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return true;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "ujjwalfx@gmail.com"; // Add your email address here
$email_subject = "Github-Website Contact Form: $name";
$email_body = "You have received a new message from your website contact form.\n\nHere are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage: $message";

// Set the headers
$headers = "From: $email_address\r\n";  // This sets the "From" address for the email
$headers .= "Reply-To: $email_address\r\n"; // Sets the "Reply-To" address
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";  // Ensures proper content encoding

// Send the email
if(mail($to, $email_subject, $email_body, $headers)) {
    echo "Thank You! -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
} else {
    echo "Error sending email!";
}
?>