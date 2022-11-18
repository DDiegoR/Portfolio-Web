<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$para = 'diegoromerofrre@gmail.com';
$asunto = 'Mensaje del Portfolio';

$header = "From: $nombre $mail \r\n";
$header .= "X-Mailer: PHP5\n";
$header .= 'MIME-Version: 1.0' . "\n";
$header .= 'Content-Type: text/html; charset=iso-8859-1' . "\r\n";

$message = "Este mensaje fue enviado por: ".$name." <br>";
$message .= "Su correo electrónico es: ".$mail."<br>";
$message .= "Mensaje: ".$message;

mail($para, $asunto, $message, $header);

header('Location:index.html');
?>