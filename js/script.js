// VARÍAVEIS DOS ELEMENTOS DA TELA
const modal = document.getElementById('modal');
const status = document.getElementById('status');
const tempo = document.getElementById('tempo');
const concluido = document.getElementById('concluido');
const qtdePostos = document.getElementById('qtde-postos');
const cartoes = document.getElementById('cartoes');
let resposta = [];

// CONEXÃO COM BACKEND

const url = 'https://backend-postos.herokuapp.com/upload';

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = ()=>{
    if(xhttp.readyState === XMLHttpRequest.LOADING){
        status.innerHTML = "Carregando a lista de postos..";
    }else if(xhttp.readyState === XMLHttpRequest.OPENED ){
        status.innerHTML = "Buscando dados no servidor...";
    }else if(xhttp.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        status.innerHTML = "Recebendo dados...";
    }else if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
        resposta = JSON.parse(xhttp.responseText);
        status.innerHTML = "Pronto!";
        concluido.classList = "";
        qtdePostos.innerHTML = resposta.length;
        criaPostos(resposta);
        console.log(resposta[0]);
        tempoFecharBtn();
    }
}
/*
xhttp.open('GET', url, true);
xhttp.send();
*/

// FIM DA CONEXÃO COM O BACK END

modal.classList += " esconde"; // apagar essa linha depois

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

function criarCartao(posto){
    const div = document.createElement('div');
    div.classList = "cartao-lista";

    const pPosto = document.createElement('p');
    const pEndereco = document.createElement('p');
    const pBairro = document.createElement('p');
    const pCidade = document.createElement('p');
    const pBotao = document.createElement('p');
    const i = document.createElement('i');
    i.classList = "fas fa-route";

    pPosto.innerText = posto.nomePosto;
    pEndereco.innerText = posto.nomeFantasia;
    pBairro.innerText = posto.endereco;
    pCidade.innerText = posto.cidade;
    pBotao.appendChild(i);
    pBotao.innerText += " Dirigir até lá!";

    div.appendChild(pPosto);
    div.appendChild(pEndereco);
    div.appendChild(pBairro);
    div.appendChild(pCidade);
    div.appendChild(pBotao);

    cartoes.appendChild(div);
}


function criaPostos(postos){
    postos.forEach(posto => {
        criarCartao(posto);        
    });
 }