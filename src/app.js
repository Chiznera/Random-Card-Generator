/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let Suit = [`♠`, `♣`, `♥`, `♦`];
  let Value = [`A`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `J`, `Q`, `K`];
  const cards = [];
  for (let s = 0; s < Suit.length; s++) {
    for (let v = 0; v < Value.length; v++) {
      cards.push([Suit[s], Value[v]]);
    }
  }
  var randomCard = cards[Math.floor(Math.random() * cards.length)];
  document.body.innerHTML = `<div class="cardBody">
  <div class="cardSuit cardSuitLeft">
  <h1>${randomCard[0]}</h1>
  </div>
  <div class="cardValue">
  <h1>${randomCard[1]}</h1>
  </div>
  <div class="cardSuit cardSuitRight">
  <h1>${randomCard[0]}</h1>
  </div>
</div>`;
};
