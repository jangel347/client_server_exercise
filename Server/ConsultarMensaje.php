<?php
include 'Connection.php';

header('Access-Control-Allow-Origin: *');

$conn = connect();
$sql = "SELECT * FROM messages";
$result = mysqli_query($conn,$sql);
// var_dump($resultado);
$rpta = [];
$x = 0;
while($row = mysqli_fetch_array($result)) {             
    $rpta[$x][] = $row['content'];
    $rpta[$x][] = $row['date'];
    $rpta[$x][] = $row['owner'];
    $x++;
}
echo json_encode($rpta);
end_connection($conn);