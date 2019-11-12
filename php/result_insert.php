<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';
$id = $_POST['id'];
$top1 = $_POST['one'];
$top2 = $_POST['two'];
$top3 = $_POST['three'];
$yn = $_POST['yn'];
$img = $_POST['img'];
$date =date("Y-m-d H:i:s");
// Create connection
$conn = new mysqli($host, $user, $password, $dbName);
// Check connection
// Check connection
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

    $query=mysqli_query($conn, "INSERT INTO test_result(top1,top2,top3,user_id,result,img_id,timestamp) VALUES ('".$top1."','".$top2."','".$top3."','".$id."','".$yn."','".$img."','".$date."')");

?>