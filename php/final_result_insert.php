<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';
$id = $_POST['id'];
$point = $_POST['point'];
$number = $_POST['number'];
$date =date("Y-m-d H:i:s");
// Create connection
$conn = new mysqli($host, $user, $password, $dbName);
// Check connection
// Check connection
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO final_result(user_id,point,number,timestamp) VALUES ('".$id."','".$point."','".$number."','".$date."')");

?>