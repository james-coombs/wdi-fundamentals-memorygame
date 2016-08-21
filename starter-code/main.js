console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoardID = document.getElementById('game-board');

var cards = document.getElementById('card');

var createBoard = function(){
	for (x = 0; x < cards.length; x++) {

	// create a section element.
	var newCardDiv = document.createElement('div');

	// add a class.
	newCardDiv.ClassName = 'card';

	gameBoardID.appendChild(newCardDiv);

}
};

/*
if (cardOne === cardFour); {
	alert("Sorry, try again.");
}

if (cardOne === cardThree); {
	alert("Sorry, try again.");
}

if (cardOne === cardTwo); {
	alert("You found a match!");
}

if (cardOne === cardTwo); {
	alert("You found a match!");
}
*/