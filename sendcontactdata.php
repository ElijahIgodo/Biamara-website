<?php
include "connection.php";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailaddress = $_POST['emailaddress'];
    $message = $_POST['message'];
    
  $insert = "INSERT INTO `contacts`(`name`, `emailaddress`, `message`)
  VALUES ('$name', '$emailaddress', '$message')";
  $ins_res = mysqli_query($con, $insert);
  if ($ins_res) {
    echo "Your message has been sent successfully! We will contact you shortly.";
  }
  else{
    echo "Registration failure!";
  }
}

?>