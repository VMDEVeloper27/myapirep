<?php

$name = $_POST['name'];
$phone = $_POST['email'];
$email = $_POST['phone'];
$token = "5827796739:AAHWypkIHqz3UprLIBWhna9DxB-iwzXbWMc";
$chat_id = "837052175";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thx.html');
} else {
  echo "Error";
}
?>