<?php  
$imagesDir = '../test/ml/input20/bull/';
$images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

$size = count($images);
$output = array("images" => $images, "size" => $size);
echo json_encode($output);
?>