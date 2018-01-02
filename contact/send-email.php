<?php

$from = $_POST['email'];
$name = $_POST['name'];
$to = "info@mosbyspopcorn.com";
$message = $_POST['message'];
$type = $_POST['type'];



if ($type == 'fundraising') {
  $message = "TYPE: Fundraising\n" .$message;
}
elseif ($type == 'partnering') {
  $message = "TYPE: Partnering\n" .$message;
}
elseif ($type == 'other') {
  $message = "TYPE: Other\n" .$message;
}

$message = "NAME: "  .$name ."\n" .$message;

mail($to, "Contact Us Mosbys", $message, "FROM: " .$from);

header('Location: contact.html');


?>
