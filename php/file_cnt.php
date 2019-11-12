
<?PHP
$target_dir = "../test/ml/input20/".$_POST['type'];
    $out_dir = scandir($target_dir);
    $cnt = count($out_dir);
    echo "The number of images in the folder: ".($cnt-2)."";
?>