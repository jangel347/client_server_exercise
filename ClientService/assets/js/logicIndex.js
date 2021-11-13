const URL_DOMAIN = "HERE THE SERVER'S APPLICATION URL";
// const URL_DOMAIN = "http://localhost/Server";


function sendMessage() {
    let message = document.getElementById("iMessage").value;
    if (message){
        $.ajax({
            type: "POST",
            url: URL_DOMAIN + "/IngresarMensaje.php",
            data: {
                message: document.getElementById("iMessage").value,
                owner: navigator.userAgent
            }
        }).done((data) => {
            alert(data);
            document.getElementById("iMessage").value = "";
        }).fail((err) => {
            alert("Error al ingresar");
            console.log(err);
        });
    } else {
        alert('El mensaje no puede estar vacío')
    }
}

