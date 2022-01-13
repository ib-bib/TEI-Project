<?php 
	class Database {
		public $connection;

		function __construct() {
			$DB_USER = 'admin';
			$DB_PASS = '12345';
			$DB_HOST = 'localhost';
			$DB_NAME = 'covid19';
			$this->connection = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
		}

		function query($sql) {
			return ($this->connection->query($sql));
		}

		function __destruct() {
			$this->connection->close();
		}
	}
?>