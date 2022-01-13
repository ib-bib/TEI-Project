<?php 
	include('../db/database.php');
	header('Content-Type: application/json');

	if($_SERVER['REQUEST_METHOD'] === 'POST') {

		$credentials = file_get_contents('php://input');
		$credentials = json_decode($credentials);
		$username = $credentials->user;
		$password = $credentials->pass;

		$db = new Database();
		$sql = "SELECT user,pass FROM users WHERE user='$username' AND pass='$password'";

		$result = $db->query($sql);

		if ($result->num_rows > 0) {
			setcookie('admin', True, time() + (86400 * 30), "/");
			echo json_encode(array('logged' => 1));
			die();
		}
		
		echo json_encode(array('logged' => 0));
		die();
	}

	http_response_code(404);

?>