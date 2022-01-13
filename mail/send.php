<?php 
	
	include('../db/database.php');
	header('Content-Type: application/json');

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$data = file_get_contents('php://input');
		$data = json_decode($data);

		$name = $data->name;
		$email = $data->email;
		$message = $data->message;

		$sql = "INSERT INTO mail (name, email, message) VALUES ('$name', '$email', '$message')";
		
		$db = new Database();
		echo json_encode(($db->query($sql)) ? array('status'=>true) : array('status'=>false));
		die();
	}
	
	echo json_encode(array('error'=> 500))

?>