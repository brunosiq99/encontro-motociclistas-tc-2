"use strict"
//function abreCard(ano) {
//    const card = document.querySelector(ano);
//    card.classList.add('card-aberto');
//}

// pontos a melhorar: nesse primeiro momento farei uma função para cada card, depois mehorarei isso

var botao2020 = document.querySelector('.botao-2020');
var icone2020 = document.querySelector('.icone-2020');
var conteudo2020 = document.querySelector('.conteudo-2020');

var botao2019 = document.querySelector('.botao-2019');
var icone2019 = document.querySelector('.icone-2019');
var conteudo2019 = document.querySelector('.conteudo-2019');

var botao2016 = document.querySelector('.botao-2016');
var icone2016 = document.querySelector('.icone-2016');
var conteudo2016 = document.querySelector('.conteudo-2016');

var botao2015 = document.querySelector('.botao-2015');
var icone2015 = document.querySelector('.icone-2015');
var conteudo2015 = document.querySelector('.conteudo-2015');

botao2020.addEventListener('click', function() {
    conteudo2020.classList.toggle('card-aberto');
    icone2020.classList.toggle('fa-angle-down');
    icone2020.classList.toggle('fa-angle-up');
})

botao2019.addEventListener('click', function() {
    conteudo2019.classList.toggle('card-aberto');
    icone2019.classList.toggle('fa-angle-down');
    icone2019.classList.toggle('fa-angle-up');
})

botao2016.addEventListener('click', function() {
        conteudo2016.classList.toggle('card-aberto');
        icone2016.classList.toggle('fa-angle-down');
        icone2016.classList.toggle('fa-angle-up');
})

botao2015.addEventListener('click', function() {

    conteudo2015.classList.toggle('card-aberto');
    icone2015.classList.toggle('fa-angle-down');
    icone2015.classList.toggle('fa-angle-up');

})


