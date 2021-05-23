<?php

$recepient = "hotel.busse@mail.ru"; //ваш email
$sitename = "Таунхаус Буссе в сердце Владивостока";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$message = trim($_POST["message"]);
$message = "Ваше имя: $name \nВаш номер телефона: $phone \nВаш email: $mail \nСообщение: $message";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");