(function bingoGameSkylab(){
    bingo();

    function bingo() {
        let playerName = prompt('Introduce tu nombre:');
        let balls = getBallsByQuantityAndShuffle(70);
        let bingoCard = generateBingoCard();
        let turn = 1;
        let continuePlaying = false;
        let isLine = false;
    
        playBingo();
    
        function playBingo() {
    
            showBingoCard();
            askForNewTurn();
    
            while (continuePlaying && !isLine) {
                let currentNumber = getRandomBall();
                turn += 1;
                console.log('Estas en el turno '+ turn + ' y la bola que ha salido es: ' + currentNumber);
                checkNumber(currentNumber);
                checkForLine()
                showBingoCard();
                askForNewTurn();
            }
    
            endBingo();
        
        }
    
        function endBingo() {
            if (isLine) {
                console.log('Has ganado! Enhorabuena!');
            }
            
            console.log('Hasta pronto!');
        }
    
        function checkForLine() {
            isLine = true;
            for (let i = 0; i < bingoCard.length; i += 1) {
                if (typeof bingoCard[i] === 'number') {
                    isLine = false;
                }
            }
        }
    
        function checkNumber(numberToCheck) {
            for (let i = 0; i < bingoCard.length; i += 1) {
                if (numberToCheck === bingoCard[i]) {
                    bingoCard[i] = 'X';
                }
            }
        }
    
        function showBingoCard() {
            console.log('Tu cartón dela suerte es el siguiente: ');
            console.log(bingoCard.join(' | '));
        }
    
        function askForNewTurn() {
            continuePlaying = confirm('¿Quieres jugar el siguiente turno?');
        }
    
        function getTurnInfo() {
            console.log('Turno: '+ turn);
        }
    
        function getBallsByQuantityAndShuffle(quantity) {
            let balls = [];
            for (let i = 1; i <= quantity; i += 1) {
                balls.push(i);       
            }
            shuffle(balls);
            return balls;
        }
    
        function generateBingoCard() {
            let arrayToReturn = [];
       
            for (let i = 0; i < 15; i += 1) {
                let randomNumber = Math.floor(Math.random() * balls.length);
                if (arrayToReturn.indexOf(randomNumber) === -1) {
                    arrayToReturn.push(randomNumber); 
                } else {
                    i -= 1;
                }
            }
    
            return arrayToReturn;
        } 
    
        function getRandomBall() {
            return balls.pop();
        }
    
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }
    
    }
})();

