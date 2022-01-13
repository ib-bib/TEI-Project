<?php 

	include('../db/database.php');
	header('Content-Type: application/json');

	if ((isset($_COOKIE['admin']) && $_COOKIE['admin'] == True) && ($_SERVER['REQUEST_METHOD'] === 'POST')) {
		$data = file_get_contents('php://input');
		$data = json_decode($data);
		$email_id = $data->id;

		$sql = "DELETE FROM mail WHERE id=$email_id";
		$db = new Database();

		if($db->query($sql)) {
			echo json_encode(array('status' => 1));
			die();
		}

		echo json_encode(array('status' => 0));
		die();
	}
	
	http_response_code(403);
?>