<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$para = 'diegoromerofrre@gmail.com';
$asunto = 'Mensaje del Portfolio';

$header = 'From: ' . $mail . " \r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain \r\n";

$message = "Este mensaje fue enviado por: "$name " \r\n";
$message .= "Su correo electrónico es: "$mail " \r\n";
$message .= "Mensaje: "$message " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

mail($para, $asunto, $message);

header('Location:index.html');
?>