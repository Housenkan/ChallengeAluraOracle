//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var listaAmigos = [];

function adicionarAmigo(){
    let campo = document.querySelector('input').value;
    if(campo === ""){
        alert("Escreva um nome");
    }
    listaAmigos.push(campo);
    console.log(listaAmigos); 
    let campo2 = document.querySelector('ul');
    campo2.innerHTML = listaAmigos;
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
