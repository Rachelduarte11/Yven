
<?php
require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $connection->real_escape_string($_POST['name']);
    $lastname = $connection->real_escape_string($_POST['lastname']);
    $email = $connection->real_escape_string($_POST['email']);
    $password = $connection->real_escape_string($_POST['password']);
    $confirm_password = $connection->real_escape_string($_POST['confirm_password']);

    if ($password !== $confirm_password) {
        echo "Las contraseñas no coinciden.";
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, lastname, email, password) VALUES ('$name', '$lastname', '$email', '$hashed_password')";

    if ($connection->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
    }

    $connection->close();
}
?>
