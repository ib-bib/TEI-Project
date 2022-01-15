<?php
	if (!(isset($_COOKIE['admin']) && $_COOKIE['admin'] == True)) {
		header('Location: /admin/login.html');
		die();
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
	<title>Administration</title>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<style type="text/css">
		body {
			font-family: monospace;
		}

		.del-icon {
			min-width: 32px;
			min-height: 32px;
		}

		hr, .cont {
			max-width: 80%;
		}
	</style>
</head>
<body>
	<center>
		<label>Administrator Page</label><br>
		<label>Email Management System</label>
		<hr />
		<div class="alert alert-dismissible fade show cont" role="alert" hidden>
	      <label></label>
	      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	        <span aria-hidden="true">&times;</span>
	      </button>
	    </div>
		<div class="d-lg-flex flex-lg-row border cont">
			<div class="themed-grid-col col-lg-4 border">Name</div>
			<div class="themed-grid-col col-lg-4 border">Email</div>
			<div class="themed-grid-col col-lg-4 border">Message</div>
		</div>
		<hr style="max-width: 50%;" />
		<div class="d-lg-flex flex-lg-column-reverse cont" id="container"></div>
	</center>
	<script type="text/javascript">

		const delete_email = async (e) => {
			let eid = e.parentNode.getAttribute('emailid');
			let result = await (() => axios.post('/mail/delete.php', {id: eid}).then(response => response.data))();
			let alertdiv = document.querySelector('.alert');
			if (result.status) {
              if(alertdiv.classList.contains('alert-danger')) { alertdiv.classList.remove('alert-danger') };
              alertdiv.classList.add('alert-success');
              e.parentNode.parentNode.removeChild(e.parentNode);
              alertdiv.textContent = "Email deleted successfully";
            } else {
              if(alertdiv.classList.contains('alert-success')) { alertdiv.classList.remove('alert-success') };
              alertdiv.classList.add('alert-danger');
              alertdiv.textContent = "Email was not deleted!!";
            }
            alertdiv.hidden = false;
            setTimeout(() => {alertdiv.hidden = true}, 3000);
		}

		const show_data = async () => {
			const data = await (() => axios.get('/mail/retrieve.php').then(response => response.data))();
			const container = document.querySelector('#container');
			const span = (d) => `<span class="themed-grid-col col-lg-4 border">${d}</span>`;
			const delete_icon = `
				<i class="ml-2" onclick="delete_email(this)">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-square-fill" viewBox="0 0 16 16">
					  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
					</svg>
				</i>
			`;
			for(let obj of data) {
				const obj_container = document.createElement('div');
				obj_container.innerHTML = `<div class="d-lg-flex flex-lg-row border" emailid="${obj.id}">${span(obj.name)} ${span(obj.email)} ${span(obj.message)} ${delete_icon}</div>`;
				container.appendChild(obj_container)
			}
		};

		show_data();

	</script>
</body>
</html>
