'use strict'
let showNumber = document.getElementById('showNumber');
let submit = document.getElementById('check');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');
let yourNumbers = document.querySelector('.yourNumbers');
let newGame = document.querySelector('.newGame');
let info = document.querySelector('h2');

let myNumbers = [];
let highScoresArray = [];
let trial = 20;

newGame.addEventListener('click', () => {
    trial = 20;
    score.innerHTML = trial;
    myNumbers = [];
    yourNumbers.innerHTML = myNumbers;
    showNumber.innerHTML = '?';
    submit.style.display = 'block';
    document.getElementById('number').value = '';
    random = Math.floor((Math.random()*20)+1);
    console.log(random);
})

// random number
let random = Math.floor((Math.random()*20)+1);
console.log(random);

// handle input number
submit.addEventListener('click', ()=> {
    // value of input
    let inputValue = document.getElementById('number').value;
    console.log(inputValue);
    //change question mark on value from input
    showNumber.innerHTML = inputValue;

    if( inputValue == random ) {
        info.innerHTML = "🏆 <span class='colorGreen'>You guessed the number!</span>";
        highScoresArray.push(trial);
        highScore.innerHTML = Math.max.apply(Math, highScoresArray);
        submit.style.display = 'none';
    } else if ( inputValue > random && inputValue <= 20) {
        info.innerHTML = "<span class='colorRed'>The number entered is too large !</span>";
        --trial;
        score.innerHTML = trial;
        myNumbers.push(inputValue);
        yourNumbers.innerHTML = myNumbers;
    } else if ( inputValue < random && inputValue > 0) {
        info.innerHTML = "<span class='colorRed'>The number entered is too small !</span>";
        --trial;
        score.innerHTML = trial;
        myNumbers.push(inputValue);
        yourNumbers.innerHTML = myNumbers;
    } else if ( inputValue <= 0 || inputValue > 20 ) {
        info.innerHTML = "<span class='colorRed'>You must enter a number from 1 to 20 !</span>";
    }
})

