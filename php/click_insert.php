<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';

$id = $_POST['id'];
$train_cycle = $_POST['train_cycle'];
$test_cycle = $_POST['test_cycle'];
$date =date("Y-m-d H:i:s");
// Create connection
$conn = new mysqli($host, $user, $password, $dbName);
// Check connection
// Check connection
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO click_info(user_id,timestamp,train_cycle,test_cycle) VALUES ('".$id."','".$date."','".$train_cycle."','".$test_cycle."')");

?>