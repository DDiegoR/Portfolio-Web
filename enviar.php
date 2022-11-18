<?php
$name = $_POST['name'];
$name = $_POST['mail'];
$name = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header = 'X-Mailer: PHP/' . phpversion() . " \r\n";
$header = "Mime-Version: 1.0 \r\n";
$header = "Content-Type: text/plain \r\n";

$message = "Este mensaje fue enviado por: ".$name " \r\n";
$message = "Su correo electrónico es: ".$mail " \r\n";
$message = "Mensaje: " . $_POST['message'] . " \r\n";
$message = "Enviado el: " . date('d/m/Y', time());

$para = 'diegoromerofrre@gmail.com';
$asunto = 'Mensaje del Portfolio';

mail($para, &asunto, utf8_decode($message), $header);

header("Location:index.html");
?>