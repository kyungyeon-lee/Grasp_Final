<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';

$id = $_POST['id'];
$img_id = $_POST['img_id'];
$train_cycle = $_POST['train_cycle'];
$test_cycle = $_POST['test_cycle'];
$date =date("Y-m-d H:i:s");
$conn = new mysqli($host, $user, $password, $dbName);
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO insert_info(user_id,img_id,timestamp,train_cycle, test_cycle) VALUES ('".$id."','".$img_id."','".$date."','".$train_cycle."','".$test_cycle."')");

?>