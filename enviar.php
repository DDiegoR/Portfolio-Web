<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$para = 'diegoromerofrre@gmail.com';
$asunto = 'Mensaje del Portfolio';

$header = 'From: ' . $mail  . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "MIME-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: ".$name." <br>";
$message .= "Su correo electrónico es: ".$mail."<br>";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";

mail($para, $asunto, utf8_decode($message), $header);

header('Location:index.html');
?>