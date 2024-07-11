<?php
require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $connection->real_escape_string($_POST['email']);
    $password = $connection->real_escape_string($_POST['password']);

    $sql = "SELECT password FROM users WHERE email='$email'";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashed_password = $row['password'];

        if (password_verify($password, $hashed_password)) {
            echo "Inicio de sesión exitoso";
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "No existe una cuenta con ese correo electrónico";
    }

    $connection->close();
}
?>
