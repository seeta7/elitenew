<?php
include 'http://localhost/save.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            echo "Login successful! Welcome, " . $username;
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "Username does not exist.";
    }
}
?>
