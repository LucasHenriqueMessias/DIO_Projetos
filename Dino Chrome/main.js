
//Ações do dinossauro
const dino = document.querySelector('.dino'); //seleciona o style css .dino
const background = document.querySelector('.background'); //pega background do css
let isjumping = false
let position = 0; //posição inicial equivale a zero


function handleKeyDown(event){ //define uma função de selecionar a tecla
    if(event.keyCode === 32){ //se a tecla selecionada for 32 (espaço)
        if(!isjumping){
        jump(); //executa a função pular
        }
    }
}
function jump(){ //função para pular
    isjumping = true;

    let upinterval = setInterval(() => { //quando deejar subir, seta um intervalo de 20
        if(position >= 150){ //se a posição for maior ou igual a 150
            clearInterval(upinterval)//ele limpa o log de subir

            let descer = setInterval(() => { //quando desejar descer seta o mesmo valor de 20 de subir (retorna a posição inicial)

                if(position <= 0){ //se a posição for menor ou igual a zero
                    clearInterval(descer) //para a função de descer
                    isjumping = false;
                }else{ //do contrário
                    position -= 20; //subtrairá 20 da posição no momento atual
                    dino.style.bottom = position + 'px';
                }
            }, 20);

        } else { //do contrário
            position += 20 //irá somar 20 à posição inicial
            dino.style.bottom = position + 'px';
        }
    }, 20);


}
//fim das ações com o dinossauro
function createcactus(){
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftinterval = setInterval(() => {

        if (cactusPosition < -40){
            clearInterval(leftinterval)
            background.removeChild(cactus);

        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftinterval);
            document.body.innerHTML = '<h1 class="gameover">Errou Feio! Erro Rude!</h1>'

        } else{
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20);
    setTimeout(createcactus, randomTime);
}

createcactus();
document.addEventListener('keydown', handleKeyDown); //adiciona um evento de pressionar a tecla pra cima