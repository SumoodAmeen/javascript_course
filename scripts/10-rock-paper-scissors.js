let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };


        updatedScore();



        /*if (score === null){
            score = {
                wins:0,
                loses:0,
                ties:0
            }
        }*/

        function pickComputerMove() {
            let randomNumber = Math.random();

            if (randomNumber > 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }

            return computerMove;
        }

        function result(userMove) {
            const computerMove = pickComputerMove();
            let result1 = '';

            if (userMove === 'rock') {
                if (computerMove === 'rock') {
                    result1 = 'tie';
                }
                else if (computerMove === 'paper') {
                    result1 = 'lose';
                }
                else if (computerMove === 'scissors') {
                    result1 = 'win';
                }
            }
            else if (userMove === 'paper') {
                if (computerMove === 'rock') {
                    result1 = 'win';
                }
                else if (computerMove === 'paper') {
                    result1 = 'tie';
                }
                else if (computerMove === 'scissors') {
                    result1 = 'lose';
                }
            }
            else if (userMove === 'scissors') {
                if (computerMove === 'rock') {
                    result1 = 'lose';
                }
                else if (computerMove === 'paper') {
                    result1 = 'win';
                }
                else if (computerMove === 'scissors') {
                    result1 = 'tie';
                }
            }

            if (result1 === 'win') {
                score.wins += 1;
            }
            else if (result1 === 'lose') {
                score.loses += 1;
            }
            else if (result1 === 'tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));  //we store the score as string, because local storage only supports

            updatedScore();

            document.querySelector('.js-result').innerHTML = `You ${result1}`;

            document.querySelector('.js-moves').innerHTML = `You <img src="images/${userMove}-emoji.png"> <img src="images/${computerMove}-emoji.png"> Computer`;

        }

        function updatedScore() {
            document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
        }