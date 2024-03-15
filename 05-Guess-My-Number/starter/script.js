'use strict';
// console.log(document.querySelector('.message').textContent);
//
// // ini akan mengganti value dari class message, namun pada console (browser) valuenya masih sama dengan sebelum values diubah
// document.querySelector('.message').textContent = '🥳 Correct number!';
// // perlu ditambahkan console.log() lagi, untuk menampilkan new valueny
// console.log(document.querySelector('.message').textContent);

// memberikan value pada input property
// document.querySelector('.guess') . value = 23;
// // ini akan menyimpan apapun yang dimasukan ke input field dari code html dengan class .guess
// console.log(document.querySelector('.guess') . value);

// men-set nilai untuk random number, 1-20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//mendapatkan values dari input ketika button di click/trigger
document.querySelector('.check').addEventListener('click', function () { // function ini akan di panggil ketika event happens
    // ketika button check di click, maka value dari class check akan ditampilkan di console
    let guess = Number(document.querySelector('.guess').value); // convert value menjadi number

    console.log(guess);

    // melakukan pengecekan jika value bernilai false (tidak ada/bukan number)
    if (!guess) {
        showSelector('.message', '⛔ no number!');
    } else if (guess === secretNumber) {
        showSelector('.message', '🥳 Correct number!');
        // menampilkan random number pada mystery box
        showSelector('.number', secretNumber);
        // manipulate DOM style ketika jawaban benar
        document.querySelector('body').style.backgroundColor = '#60b347'; // nama style ditulis dalam camel case dan valuenya ditulis dengan string (apapun valuenya).
        document.querySelector('.number').style.width = '30rem';
        if(highScore < score){
            highScore = score;
            showSelector('.highscore', highScore);
        }
    } else if (guess < secretNumber) {
        checkScore(score, 'low');
    } else if (guess > secretNumber) {
        checkScore(score, 'high');
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    showSelector('.number', '?');
    showSelector('.score', score);

    document.querySelector('.guess').value = '';

    showSelector('.message', 'Start guessing...');


})

const checkScore = function (number, compareName){
    if(number > 1){
        showSelector('.message', `Too ${compareName}`);
        // //jika input salah, maka score akan dikurangi 1
        score--;
        showSelector('.score', score);
    } else {
        showSelector('.message', "💥 You lose the game!");
        showSelector('.score', 0);
    }
}

const showSelector = function(selectorName,textValue){
    document.querySelector(`${selectorName}`).textContent = `${textValue}`;
}