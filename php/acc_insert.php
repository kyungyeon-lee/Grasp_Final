<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';
$id = $_POST['id'];
$test_acc = $_POST['test_acc'];
$validation_acc = $_POST['validation_acc'];
$training_acc = $_POST['training_acc'];

// Create connection
$conn = new mysqli($host, $user, $password, $dbName);
$date =date("Y-m-d H:i:s");
// Check connection
// Check connection
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO accuracy(user_id,test_acc,validation_acc,training_acc,timestamp) VALUES ('".$id."','".$test_acc."','".$validation_acc."','".$training_acc."','".$date."');");

?>