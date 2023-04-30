<?php
$email= $_POST['email'];
$password= $_POST['password'];

if(!empty($username)|| !empty($password)){
	$host = "localhost";
	$dbUsername="root";
	$dbpassword="";
	$dbname="login";

	$conn = new mysqli_connect($localhost, $dbUsername, $dbpassword, $dbname);
	if(mysqli_connect_error()){
		 die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
	}else{
		$SELECT="SELECT email From register Where email = ? limit 1";
		$INSERT = "INSERT Into register(username,password) values(?,?)";

		$stmt=$conn-> prepare($SELECT);
		$stmt-> bind_param("s",$email);
		$stmt-> execute();
		$stmt-> bind_result($email);
		$stmt-> store_result();
		$rnum = $stmt->num_rows;

		if($rnum==0){
			$stmt->close();
			$stmt = $conn->prepare($INSERT);
			$stmt-> bind_param("ssssii",$username,$password);
			$stmt->execute();
			echo"Login Successful";
		}else{
			echo"You are already registered";
		}
		$stmt->close();
		$conn->close();
	}

}else{
	echo"Please enter a Details";
	die();
}
?>