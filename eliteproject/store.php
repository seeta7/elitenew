<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get form data
$name = isset($_POST['name']) ? $_POST['name'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$phonenumber = isset($_POST['phone']) ? $_POST['phone'] : null;

// Check for empty values
if (empty($name) || empty($email) || empty($phonenumber)) {
    die("Please fill in all fields.");
}

// Database connection
$conn = new mysqli('localhost', 'root', '', 'elite');

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registration (name, email, phonenumber) VALUES (?, ?, ?)");
if (!$stmt) {
    die("Failed to prepare the SQL statement: " . $conn->error);
}

// Bind parameters and execute
$stmt->bind_param("sss", $name, $email, $phonenumber);
if (!$stmt->execute()) {
    die("Error executing statement: " . $stmt->error);
}

// Advanced styled success message with a modern look and background animation
echo "<style>
        body {
            background: gray;
            font-family: Arial, sans-serif;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .success-container {
            text-align: center;
            padding: 40px;
            background-color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h2 {
            color: #4CAF50;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            color: #555;
        }

        button {
            padding: 15px 30px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 20px;
        }

        button:hover {
            background-color: #0056b3;
        }
      </style>";

echo "<div class='success-container'>
        <h2>🎉 Registration Successful!</h2>
        <p>Thank you for enrolling in our program.</p>
        <button onclick=\"window.location.href='index.html';\">Go to Home</button>
      </div>";

// Close statement and connection
$stmt->close();
$conn->close();
?>
