let order = [];
let clickedorder = [];
let score = 0;
//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleorder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedorder = [];

    for (let i in order) {
        let elementcolor = createColorElement(order[i]);
        lightColor(elementcolor, Number(i) + 1);
    }
}

//acende a próxima cor
lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//confere se os botões são os mesmos da ordem aleatória gerada no jogo
let checkOrder = () => {
    for(let i in clickedorder){
        if(clickedorder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedorder.length == order.length){
        alert(`Sua pontuação foi de ${score}!\nIniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do jogador
let click = (color) =>{
    clickedorder[clickedorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//Função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3 ){
        return blue;
    }
}

//Função passar de nível
let nextLevel = () =>{
    score++;
    shuffleorder();
}

//Função gameover
let gameOver = () =>{
    alert(`Você perdeu o jogo.\nPontuação: ${score}\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedorder = [];
    playGame();
}

//Função iniciar jogo
let playGame = () =>{
    alert('Bem vindo ao Genesis!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia o jogo
playGame();