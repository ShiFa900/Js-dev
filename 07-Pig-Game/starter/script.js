'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
const score1El = document.getElementById('score--1'); // mencari element dengan id, ditulis tanpa #
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = function () {
    // switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0

    // elemet toggle akan menghapus class jika found dan akan ditambahkan jika undefined
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // generating random number untuk dice
        const randomDice = Math.trunc(Math.random() * 6) + 1;
        // menampilkan dice sesuai dengan jumlah randomDice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${randomDice}.png`; // ini akan menampilkan dice yang angkanya sesuai dengan randomDice
        // jika dice 1, maka akan switch player
        if (randomDice !== 1) {
            // menambahkan score
            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click', function () {
    if (playing) {
        //simpan score dari active player
        scores[activePlayer] += currentScore; // score ke 0/1 = score player ke 0/1 ditambah currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //ketika score >= 100, maka permainan berakhir dengan salah satu player menang
        if (scores[activePlayer] >= 10) {
            // finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        } else {
            // switch player
            switchPlayer();
        }
    }

})

btnNew.addEventListener('click', function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player-active');
    current0El.textContent = 0;
    current1El.textContent = 0;
    scores[activePlayer] = 0;
    score1El.textContent = 0;
    score0El.textContent = 0;
    diceEl.classList.remove('hidden');
    playing = true;
})

// new game, ada error (wrong logic)