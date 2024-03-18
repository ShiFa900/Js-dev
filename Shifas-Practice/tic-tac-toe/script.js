'use strict';
// IDENTIFY
// 1. menentukan pemain, setiap pemain memiliki simbol yang berbeda (x dan o)
// 2. saat pemain (currentPlayer) meng-klik kotak maka akan langsung menampilkan simbol pemain tersebut
// 3. menentukan pemenang, saat draw
// saat seorang pemain berhasil mendapatkan 3 simbolnya (diagonal, horizontal dan vertical) maka dia akan menang => point nomor 3

// menampilkan status
const statusDisplay = document.querySelector('.game-status');
// menampilkan status permainan, apakah masih berlanjut atau salah satu pemain menang atau draw
let gameActive = true;
// menampilkan simbol untuk player one
let currentPlayer = 'X';
// urutan permainan setelah pemain menginput simbolnya masing-masing
let gameState = ['','','','','','','','',''];

// arrow function untuk menampilkan pesan saat player menang
const winningMessage = () => `Player ${currentPlayer} win!`;
const drawMessage = () => `Draw game!`;
// menampilkan pesan untuk menunjukkan giliran pemain
const currentPlayerMessage = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerMessage();

// meng-set winning conditions
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// menampilkan pesan giliran pemain
function handlePlayerTurn(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerMessage();
}


function handleCellPlayer(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// membuat validasi untuk tiap inputan player di masing" cell
function handleResultValidation(){
    let roundWon = false;
    // kenapa 7?
    for(let i = 0; i <= 7; i++){
        const winConditions = winningConditions[i];
        // mengecek pada masing" array pada array winning conditions
        const a = gameState[winConditions[0]];
        const b = gameState[winConditions[1]];
        const c = gameState[winConditions[2]];

        // jika salah satu kotak masih kosong, maka kotak tersebut akan di lompati
        if(a === '' || b === '' || c === '') continue;
        // jika win condition pada const a,b dan c sama, maka player akan menang
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        // document.querySelector('.game-status').textContent = winningMessage();
        statusDisplay.innerHTML = winningMessage()
        gameActive = false;
        return;
    }
    // saat permainan draw, akan mengecek string kosong pada gameState
    const roundDraw = !gameState.includes('');
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerTurn();
}

function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if(gameState[clickedCellIndex] !== '' || !gameActive) return;
    handleCellPlayer(clickedCell, clickedCellIndex);
    // return untuk function handleCellPlayer untuk menentukan cell tiap player
    handleResultValidation();
}

//buat logic untuk button restart again
// buat semua kembali pada semula
function handleRestartGame(){
    gameActive = true;
    gameState = ['','','','','','','','',''];
    statusDisplay.innerHTML = currentPlayerMessage();
    //loop tiap cell untuk meng-set valuenya menjadi string kosong lagi
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
// akan memanggil function handleCellClick saat cell di click oleh player
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick)); // valuenya bertipe array
// akan dieksekusi saat player menekan button restart game
document.querySelector('.game-restart').addEventListener('click',handleRestartGame);
