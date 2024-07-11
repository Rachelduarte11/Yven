<?php
$servername = "localhost";
$username = "";
$password = "";
$dbname = "yven";
$root = 3306;

$connection = new mysqli(
    $servername, 
    $username, 
    $password, 
    $dbname,
    $root
);

if ($connection->connect_error) {
    die("Conexión fallida: " . $connection->connect_error);
}
?>
