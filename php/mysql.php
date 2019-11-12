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
    $id = $_GET["id"];
    $query=mysqli_query($conn, "SELECT * FROM confidence WHERE img_id LIKE '%".$id."%'");
    while($data = mysqli_fetch_array($query)){
        echo $data["data"]."<br>";
    }

?>