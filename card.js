const cardsAscii = require("cards-ascii");

const randomCardId = Math.floor(Math.random()*52) + 1;

console.log(cardsAscii.getById(randomCardId).graphic);