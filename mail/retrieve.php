<?php 
	
	include('../db/database.php');
	header('Content-Type: application/json');

	if (isset($_COOKIE['admin']) && $_COOKIE['admin'] == True) {
		
		$db = new Database();
		$sql = "SELECT * FROM mail";
		$emails = $db->query($sql);
		$emails_data = array();
		if ($emails->num_rows > 0) {
			while ($row = $emails->fetch_assoc()) {
				$id = $row['id'];
				$name = $row['name'];
				$email = $row['email'];
				$message = $row['message'];

				$email_details = array('id'=>$id, 'name'=>$name, 'email'=>$email, 'message'=>$message);
				array_push($emails_data, $email_details);
			}
		}

		echo json_encode($emails_data);
		die();
	}

	http_response_code(403)

?>