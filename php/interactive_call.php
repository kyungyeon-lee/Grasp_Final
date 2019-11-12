<?PHP
header('Content-Type: text/html; charset=UTF-8');
 echo start;
 echo $_POST['id']; 
 echo shell_exec("cd ../test/ml && ./interactive.sh ".$_GET['id']);
  ?>