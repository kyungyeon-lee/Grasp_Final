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
$sum = 0;
$i = 0;
    //$id = "mj_full";
    // $id = "mj_ir";
    // $id = "mj_int";
    // $id = "mj_default";
   //  $id = "sh_full";
    // $id = "sh_ir";
    // $id = "sh_int";
     $id = $_POST['id'];
    $query=mysqli_query($conn, "SELECT * FROM accuracy WHERE user_id  = '".$id."'LIMIT 100 ");
    while($data = mysqli_fetch_array($query)){
        //echo $data["validation_acc"]."<br>";
        $sum = $sum + (float)$data["validation_acc"];
        $i++;
    }

    $mean = $sum/$i;
    echo "평균 ".$mean."<br>";

    $j = 0;
    $var_sum = 0;
    $query2=mysqli_query($conn, "SELECT * FROM accuracy WHERE user_id  = '".$id."'LIMIT 100 ");
    while($data = mysqli_fetch_array($query2)){
        //echo $data["validation_acc"]."<br>";
        $var_sum = $var_sum + pow(abs($mean - (float)$data["validation_acc"]),2);
        $j++;
    }

    //echo "분산 ".($var_sum/$j); 
    echo "표편 ".sqrt($var_sum/$j); 



    $sum2 = 0;
$i2 = 0;
    $query3=mysqli_query($conn, "SELECT * FROM final_result WHERE user_id  = '".$id."' LIMIT 100");
    while($data = mysqli_fetch_array($query3)){
        //echo $data["point"]."<br>";
        $sum2 = $sum2 + (float)$data["point"];
        $i2++;
    }

    $mean2 = $sum2/$i2;
    //echo "반복" .$i2;
    echo "<br><br>평균 ".$mean2."<br>";

    $j2 = 0;
    $var_sum2 = 0;
    $query5=mysqli_query($conn, "SELECT * FROM final_result WHERE user_id  = '".$id."'LIMIT 100");
    while($data = mysqli_fetch_array($query5)){
        //echo $data["point"]."<br>";
        $var_sum2 = $var_sum2 + pow(abs($mean2 - (float)$data["point"]),2);
        $j2++;
    }

    //echo "분산 ".$var_sum2/$j2; 
    echo "표편 ".sqrt($var_sum2/$j2); 



?>