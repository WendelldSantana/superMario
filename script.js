const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

const audioStart = new Audio('./audio/audio_theme.mp3');
const audioGameOver = new Audio('./audio/audio_gameover.mp3');


let loop;

const startGame = () => {  
    
    start.style.display = 'none'; 
    pipe.style.animation = 'none';
    pipe.style.visibility = 'visible';
    pipe.offsetHeigh;
    pipe.style.animation = 'pipe-animation 1.8s infinite linear';
    
    //audio
    audioStart.play();
}


    loop = setInterval(() => {
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' ,'');
        
        
     if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'imagens/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        audioStart.pause();
        audioGameOver.play();

        setTimeout(audioOff,3000);

        gameOver.style.display = 'flex'; 
        clearInterval(loop);

        
      
    }

}, 10);




function restartGame() {
    gameOver.style.display = 'none';
    pipe.style.left = '';
    pipe.style.right = '0';
    
    pipe.style.animation = 'none';
    pipe.style.visibility = 'visible';
    pipe.offsetHeigh;
    pipe.style.animation = 'pipe-animation 1.8s infinite linear';
    
    
    mario.src = './imagens/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0';
    mario.style.marginLeft = '0';
   
    audioStart.play();
    audioStart.currentTime = 0;

   

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

        
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'imagens/game-over.png';
            mario.style.width = '80px';
            mario.style.marginLeft = '50px';

            audioStart.pause();
            audioGameOver.play();

            setTimeout(audioOff,3000);

            gameOver.style.display = 'flex'; 
        
            clearInterval(loop);

            
        }
       
    }, 10);

}


const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
} ,500);
}

const audioOff = () => {
    audioGameOver.pause();
    audioGameOver.currentTime = 0;
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        startGame();
    } else if (e.key === ' ') {  // Pula ao pressionar a barra de espaço
        jump();
    }
});

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump();
    }
});