"use strict"

const botaoAbreCard = document.querySelectorAll('[data-botao]');
console.log(botaoAbreCard);

botaoAbreCard.forEach( (botao) => {
    botao.addEventListener('click',(evento) => {
        trocaAnguloBotao(evento.target);
        abreCard(evento.target.parentNode.parentNode.parentNode);
    });    
});

function trocaAnguloBotao(nBotao){ // n-ésimo Botão
    nBotao.classList.toggle('fa-angle-down');
    nBotao.classList.toggle('fa-angle-up');
}

function abreCard(nCard) { // n-ésimo card
    const nCardConteudo = nCard.querySelector('[data-cardConteudo]');
    nCardConteudo.classList.toggle('card-aberto');
}