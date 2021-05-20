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


/***
 * FURTHER CHALLENGES
 * -Change the game to follow these rules:
 * 
 * 1. A player looses his ENTIRE score when he rolls two 6 in a row .After that, it's the next player's 
 *    turn. (Hint: Always save the previous dice roll in a separate variable)
 * 2. Add an input field to the HTML where players can set the winning score ,so that they can change the 
 *    predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is 
 *    a good opportunity to use google to figure this out :)
 * 3. Add another dice to the game ,so that there are two dices now. The player looses his current score
 *    when one of them is a 1. (Hint: you will need CSS to position the second dice)
 * 
 * 4. Create a game rules modal that displays as an overlay(centered) when the button is clicked
 * 5. Create responsive mobile design
 */

var scores, roundScore, activePlayer, gamePlaying;

init(); 



document.querySelector('.btn--roll').addEventListener('click', function() {
    
    if (gamePlaying) {
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
    }
    
});

document.querySelector('.btn--hold').addEventListener('click', function() {


    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
        //check if player won
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--active').classList.add('player--winner');
            document.querySelector('.player--0').classList.remove('player--active');
            document.querySelector('.player--1').classList.remove('player--active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
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

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0]; 
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}