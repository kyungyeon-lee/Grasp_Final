<?php
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';

// Create connection
$conn = new mysqli($host, $user, $password, $dbName);
// Check connection
// Check connection
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
    $id = $_POST["id"];
    $img_id = $_POST["img_id"];
    $train_cycle = $_POST["train_cycle"];
    $train_cycle = $train_cycle-1;
    $query=mysqli_query($conn, "SELECT * FROM mis_img WHERE user_id = '".$id."' AND train_cycle = '".$train_cycle."' AND img_id LIKE '%".$img_id."%'");
    //$query=mysqli_query($conn, "SELECT * FROM mis_img WHERE user_id = 11 AND train_cycle = 18 AND img_id LIKE '%".$img_id."%'");
   
   
   // while($data = mysqli_fetch_array($query)){
     //   echo $data["img_id"];
    //}
    $data = mysqli_fetch_array($query);
    echo json_encode($data["img_id"]);
?>