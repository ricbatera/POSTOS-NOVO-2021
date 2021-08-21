console.log("Iniciando a aplicação JS")
const url = 'https://backend-postos.herokuapp.com/upload';

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = ()=>{
    if(xhttp.readyState === XMLHttpRequest.LOADING){
        console.log('solicitação de processamento')
    }else if(xhttp.readyState === XMLHttpRequest.OPENED ){
        console.log('conexão do servidor estabelecida');
    }else if(xhttp.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        console.log('cabeçalhos e status estão disponíveis.');
    }else if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
        console.log('A operação está concluída.');
        const resposta = JSON.parse(xhttp.responseText);
    }
}

xhttp.open('GET', url, true);
xhttp.send();