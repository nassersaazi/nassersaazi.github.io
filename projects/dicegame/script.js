/**
 * GAME RULES:
 * 
 * -The game has 2 players ,playing in rounds 
 * -In each turn ,a player rolls a dice as many times as he wishes.
 * -BUT ,if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
 * -The player can choose to 'Hold', which means that his ROUND score gets added to his
 *  GLOBAL score. After that ,it's the next player's turn 
 * -The first player to reach 100 points on GLOBAL score wins the game
 * 
 * 
 * LESSONS FROM THE GAME
 * - How to create our fundamental game variables
 * - How to generate a random number
 * - How to manipulate the DOM
 * - How to change CSS styles
 * 
 */

var scores, roundScore, activePlayer;

scores = [0,0]; 
roundScore = 0;
activePlayer = 0; 

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--0').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function() {
    
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {

        nextPlayer();
    }


});

document.querySelector('.btn--hold').addEventListener('click', function() {

    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    //check if player won
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--active').classList.add('winner');
        document.querySelector('.player--active').classList.remove('player--active');
    } else {
        //Next player
        nextPlayer();
    }

    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none'; 
}