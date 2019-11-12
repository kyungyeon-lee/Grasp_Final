
<?PHP
    $host = 'localhost';
    $user = 'pmauser';
    $password = 'password';
    $dbName = 'Grasp';
// Create connection
    $conn = new mysqli($host, $user, $password, $dbName);

    $id = $_POST['id'];
    $target_dir = "../test/ml/input20/yy";
    $out_dir = scandir($target_dir);
    $cnt_yy = count($out_dir)-2;
  
    $target_dir = "../test/ml/input20/bull";
    $out_dir = scandir($target_dir);
    $cnt_bull = count($out_dir)-2;
    
    $target_dir = "../test/ml/input20/lab";
    $out_dir = scandir($target_dir);
    $cnt_lab = count($out_dir)-2;
    $date =date("Y-m-d H:i:s");


    $cnt_all =$cnt_bull+$cnt_lab+$cnt_yy;
    $query=mysqli_query($conn, "INSERT INTO training_img_info(user_id,count_yy, count_bull,count_lab, count_all, timestamp) VALUES ('".$id."','".$cnt_yy."','".$cnt_bull."','".$cnt_lab."','".$cnt_all."','".$date."')");

?>