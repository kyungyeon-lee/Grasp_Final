<?PHP
  //echo shell_exec("cd back && python class.py");
  //echo shell_exec("chmod 777 data.json");
  //echo shell_exec("cd ../back && python class2.py");
  

 // echo system("python -m scripts.retrain --bottleneck_dir=tf_files/bottlenecks --model_dir=tf_files/models/ --summaries_dir=tf_files/training_summaries/mobilenet_0.50_224 --output_graph=tf_files/retrained_graph.pb --output_labels=tf_files/retrained_labels.txt --architecture=mobilenet_0.50_224 --image_dir=input30 --how_many_training_steps=5");

  //echo shell_exec("IMAGE_SIZE=224");
 // echo shell_exec("ARCHITECTURE=\"mobilenet_0.50_224\"");
 echo start;
  echo shell_exec("python -m scripts.retrain 
  --bottleneck_dir=tf_files/bottlenecks 
  --model_dir=tf_files/models/ 
  --summaries_dir=tf_files/training_summaries/mobilenet_0.50_224 
  --output_graph=tf_files/retrained_graph.pb 
  --output_labels=tf_files/retrained_labels.txt 
  --architecture=mobilenet_0.50_224 
  --image_dir=input30 
  --how_many_training_steps=5");
  ?>