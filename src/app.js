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

  function cardPull() {
    return cards[Math.floor(Math.random() * cards.length)];
  }
  console.log(cardPull());

  document.body.innerHTML = `<div class="cardBody">
  <div class="cardSuit cardSuitLeft">
  <h1>${cardPull[0]}</h1>
  </div>
  <div class="cardValue">
  <h1>${cardPull[1]}</h1>
  </div>
  <div class="cardSuit cardSuitRight">
  <h1>${cardPull[0]}</h1>
  </div>
</div>`;
};
