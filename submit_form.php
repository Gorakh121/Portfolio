<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Full_Name = $_POST["Full_Name"];
    $Email = $_POST["Email"];
    $Subject = $_POST["Subject"];
    $Message = $_POST["Message"];

    // Database connection
    $conn = new mysqli("localhost", "root", "", "portfolio_contact"); // Added database name
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO `contact-me` (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)");
        if ($stmt === false) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("ssss", $Full_Name, $Email, $Subject, $Message);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Message Sent Successfully....";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();
    }
} else {
    echo "Invalid request method.";
}
?>