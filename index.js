var firstCard = 0;
var secondCard = 0;
var thirdCard = 0;
var count = 0;


var firstNumber = document.getElementById("fnumber-el");
var secondNumber = document.getElementById("snumber-el");
var thirdNumber = document.getElementById("tnumber-el");
var totalNumber = document.getElementById("total_el");
var message = document.getElementById("message");
var button = document.getElementById("button");
var dealButton = document.getElementById("deal");

function deal() {
    firstCard = Math.floor(Math.random() * 10) + 2;
    secondCard = Math.floor(Math.random() * 10) + 2;
    if (firstCard, secondCard === 11) {
        firstCard -= 1;
    }
    if (firstCard + secondCard === 21) {
        message.textContent = "BlackJack!"
        dealButton.disabled = true;
    } else {
        count = firstCard + secondCard;
        firstNumber.textContent = firstCard;
        secondNumber.textContent = secondCard;
        totalNumber.textContent = "Total: " + count;
        dealButton.disabled = true;
    }
}


function hit() {
    thirdCard = Math.floor(Math.random() * 10) + 2;
    count = count + thirdCard;
    thirdNumber.textContent = thirdCard;
    totalNumber.textContent = "Total: " + count;
    if (count > 21) {
        message.textContent = "Sorry you busted! To play new game push New Game";
        button.disabled = true;
    }
    if (count < 21) {
        message.textContent = "Congrats you won!";
    } else if (count === 21) {
        message.textContent = "BlackJack you won!"
        button.disabled = true;
    }

}

function restart() {
    button.disabled = false;
    dealButton.disabled = false;
    firstNumber.textContent = 0;
    secondNumber.textContent = 0;
    thirdNumber.textContent = 0;
    message.textContent = "";
    totalNumber.textContent = "Total: "
}