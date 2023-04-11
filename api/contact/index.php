<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$message_sent = false;

if(isset($_POST['email']) && $_POST['email'] != ''){

    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

    //submit form
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "cbryant1993@gmail.com";


    // Set SMTP settings for Gmail
    $smtpHost = "smtp.gmail.com";
    $smtpUsername = "cbryant1993@gmail.com";
    $smtpPassword = "hbdqqonycjtrpbbo";
    $smtpPort = 587;

    // Create a PHPMailer instance
    require_once __DIR__ . "/phpmailer/src/PHPMailer.php";
    require_once __DIR__ . "/phpmailer/src/SMTP.php";
    require_once __DIR__ . "/phpmailer/src/Exception.php";
    
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Enable SMTP debugging if needed
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

    // Set the SMTP server and credentials
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $smtpPort;

    // Set the email message
    $mail->setFrom($userEmail, $userName);
    $mail->addAddress($to);
    $mail->Subject = $messageSubject;
    $mail->Body = $message;

    // Send the email
    if($mail->send()){
        $message_sent = true;
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email. Please try again.";
    }

    }
}
?>
