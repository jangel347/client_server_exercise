<?php
function connect(){
    $servername = "localhost";
    $database = "server_client_bd";
    $username = "root";
    $password = "";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function end_connection($conn){
    mysqli_close($conn);
}
