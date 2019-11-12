
<?PHP
$target_dir = "../test/ml/sample_img/".$_POST['type'];
    $out_dir = scandir($target_dir);
    $cnt = count($out_dir);
    echo "폴더 내 사진 개수 ".($cnt-2)."개";
?>