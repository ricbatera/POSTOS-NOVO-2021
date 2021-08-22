// VARÍAVEIS DOS ELEMENTOS DA TELA
const modal = document.getElementById('modal');
const status = document.getElementById('status');
const tempo = document.getElementById('tempo');
const concluido = document.getElementById('concluido');
const qtdePostos = document.getElementById('qtde-postos');


// CONEXÃO COM BACKEND

const url = 'https://backend-postos.herokuapp.com/upload';

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = ()=>{
    if(xhttp.readyState === XMLHttpRequest.LOADING){
        status.innerHTML = "Carregando a lista de postos..";
    }else if(xhttp.readyState === XMLHttpRequest.OPENED ){
        status.innerHTML = "Conexão do servidor estabelecida...";
    }else if(xhttp.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        status.innerHTML = "Recebendo dados...";
    }else if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
        const resposta = JSON.parse(xhttp.responseText);
        status.innerHTML = "Pronto!";
        concluido.classList = "";
        qtdePostos.innerHTML = resposta.length;
        tempoFecharBtn();
    }
}

xhttp.open('GET', url, true);
xhttp.send();


// FIM DA CONEXÃO COM O BACK END


function btnFechar(){
    modal.classList += " esconde";
}

function tempoFecharBtn(){
    let contador = 5; 
    const contagem = setInterval(() => {
        if(contador == 0){
            clearInterval(contagem);
            btnFechar()
        }else{
            contador --;
            tempo.innerHTML = contador;
        }
    }, 1000);
}