<!-- Form submission will work only if this is hosted on a PHP based server -->

<?php
if(isset($_POST['email'])) {
    // Email Information
    $admin_email = "mrbondsai@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" .$email);

    header('Location: http://localhost:3000/index.html')

}