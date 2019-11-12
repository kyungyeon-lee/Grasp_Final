<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';

$id = $_POST['id'];
$train_cycle = $_POST['train_cycle'];
$review =$_POST['review'];
$date =date("Y-m-d H:i:s");
$conn = new mysqli($host, $user, $password, $dbName);
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO user_review(user_id,timestamp,train_cycle,review) VALUES ('".$id."','".$date."','".$train_cycle."','".$review."')");

?>