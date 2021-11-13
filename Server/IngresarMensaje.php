<?php
include 'Connection.php';

header('Access-Control-Allow-Origin: *');

$conn = connect();
$sql = "INSERT INTO messages (content,owner,date) VALUES ('".$_POST['message']."','".$_POST['owner']."','".date("Y-m-d H:i:s")."')";
$resultado = mysqli_query($conn,$sql);
if ($resultado){
    echo 'INGRESADO CORRECTAMENTE';
} else {
    echo 'ERROR AL INGRESAR MENSAJE';
}
end_connection($conn);