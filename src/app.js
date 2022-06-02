/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let Suit = [`Spade`, `Club`, `Heart`, `Diamond`];
  let Value = [
    `Ace`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `Jack`,
    `Queen`,
    `King`,
  ];
  const cards = [];
  for (let s = 0; s < Suit.length; s++) {
    for (let v = 0; v < Value.length; v++) {
      cards.push([Suit[s], Value[v]]);
    }
  }

  function cardPull() {
    return cards[Math.floor(Math.random() * cards.length)];
  }
  
  function randomCard() {
    let cardSuit = document.querySelectorAll(`.cardSuit`);
    cardSuit.innerhtml = (`<h1>${cardPull[0]}</h1>`);
    document.body.appendChild(cardSuit)
  }
};
