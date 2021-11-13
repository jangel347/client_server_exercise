const URL_DOMAIN = "HERE THE SERVER'S APPLICATION URL";
// const URL_DOMAIN = "http://localhost/Server";

let count = 0;

setInterval(() => {
    $.ajax({
        type: "POST",
        url: URL_DOMAIN + "/ConsultarMensaje.php",
    }).done((data) => {
        document.getElementById('container_list').innerHTML = "";
        data = JSON.parse(data);
        var count = 0;
        for (dataRow in data) {
            createCard(
                data[dataRow][0] ? data[dataRow][0] : '<i>Sin mensaje</i>',
                data[dataRow][1],
                data[dataRow][2]) ? data[dataRow][0] : '<i>Sin remitente</i>';
            count++;
        }
        if (count == 0) document.getElementById('container_list').innerHTML = "No hay mensajes para mostrar";
    }).fail((err) => {
        console.log(err);
    });
}, 3000);

function createCard(text, time, owner) {
    let pMsg = document.createElement('p');
    pMsg.innerHTML = text;
    pMsg.classList.add('card-text')
    let divMsgBody = document.createElement('div');
    divMsgBody.classList.add('card-body')
    divMsgBody.appendChild(pMsg);
    let bMsgHead = document.createElement('b');
    bMsgHead.innerHTML = "Nuevo mensaje desde:";
    bMsgHead.classList.add('mr-2');
    let divMsgHead = document.createElement('div');
    divMsgHead.appendChild(bMsgHead);
    divMsgHead.innerHTML += owner + '<br>' + time;
    divMsgHead.classList.add('card-header');
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.classList.add('col-12');
    divCard.classList.add('mb-3');
    divCard.appendChild(divMsgHead);
    divCard.appendChild(divMsgBody);
    document.getElementById('container_list').appendChild(divCard);
}