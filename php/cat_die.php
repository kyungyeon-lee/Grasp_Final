<?php
header("Content-Type: application/json"); 
$data = json_decode(file_get_contents('php://input'));
$data = objectToArray($data); 
$filename = '../'.$data['id'];
echo $filename;
try {
    if(file_exists($filename))
    {
      chmod($filename, 777);
      unlink($filename);
      echo "file has deleted";
    }
    else
    {
     echo "file not exists";
    }
    
    chmod($filename, 777);
    unlink($filename);
    echo "success";
}
catch(Exception $e) {

    echo $e;
}


function objectToArray($d) {

    if (is_object($d)) {

  
     $d = get_object_vars($d);
  
    }
  
   
  
    if (is_array($d)) {
  
     return array_map(__FUNCTION__, $d);
  
    }
  
    else {
  
     return $d;
  
    }
  
   }
  
   
  
  
  