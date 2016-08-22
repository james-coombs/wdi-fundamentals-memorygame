console.log("JS file is connected to HTML! Woo!")

// cards on board
var cards = ["queen", "queen", "king", "king"];
//cards in play
var cardsinPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
	// creates cards 1-4
	for (var i = 0; i< cards.length; i++) {
		//creates div elements for cards
		var cardElement = document.createElement('div');
		// assigns cards class names
		cardElement.className = 'card';
		// when a card is clicked the function isTwoCards will be executed
		cardElement.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
    	cardElement.addEventListener('click', isTwoCards)

    	board.appendChild(cardElement);
    	board.appendChild(newCardDiv);
    }
}


//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  // checks too see if images of cards match
  console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
} 	
	else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
}
}

