const cards = ["queen","queen","king","king"];

const cardsInPlay = [];

const cardOne = cards[0];
cardsInPlay.push(cardOne); // [queen]
const lastFlippedCard = cardsInPlay[cardsInPlay.length - 1]
console.log("User flipped " + lastFlippedCard);


const cardTwo = cards[1]; // queen
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}