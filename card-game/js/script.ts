import type { Card, Suite } from "./types";

let activeCard: Card,
  previousCard: Card,
  attempts: number = 3,
  score: number = 0,
  deck: Card[] = createDeck();

// Elements
const lowerEl: HTMLButtonElement | null = document.querySelector("#lower"),
  higherEl: HTMLButtonElement | null = document.querySelector("#higher"),
  equalEl: HTMLButtonElement | null = document.querySelector("#equal"),
  placeholderEl: HTMLElement | null = document.querySelector(".placeholder"),
  attemptsEl: HTMLParagraphElement | null = document.querySelector(".attempts"),
  leftEl: HTMLParagraphElement | null = document.querySelector(".left"),
  scoreEl: HTMLParagraphElement | null = document.querySelector(".score"),
  gameOverEl: HTMLElement | null = document.querySelector("#gameover");

// Init
let picked = pickCard();
setCard(picked);

lowerEl?.addEventListener("click", lower);
higherEl?.addEventListener("click", higher);
equalEl?.addEventListener("click", equal);

function createDeck() {
  let deck: Card[] = [],
    suites: Suite[] = ["&spades;", "&hearts;", "&clubs;", "&diams;"];

  for (let i = 0; i < suites.length; i++) {
    for (let j = 2; j < 15; j++) {
      let card: Card = {
        suite: suites[i],
        color: getColor(suites[i]),
        display: getDisplay(j),
        value: j,
      };

      deck.push(card);
    }
  }

  function getColor(suite: string) {
    if (suite == "&hearts;" || suite == "&diams;") {
      return "red";
    } else {
      return "black";
    }
  }

  function getDisplay(val) {
    if (val < 11) {
      return val;
    }
    if (val == 11) {
      return "J";
    }
    if (val == 12) {
      return "D";
    }
    if (val == 13) {
      return "K";
    }
    if (val == 14) {
      return "A";
    }
  }

  return deck;
}

function pickCard() {
  let rand = Math.floor(Math.random() * deck.length);
  let pickedCard = deck.splice(rand, 1);

  // Set active card for comparison
  activeCard = pickedCard[0];

  return pickedCard[0];
}

function setCard(card: Card) {
  let el = document.createElement("article");
  el.classList.add("card");

  // Random degree for coolness
  let deg = Math.floor(Math.random() * 8);
  el.style.transform = `rotateZ(${deg}deg)`;

  el.innerHTML = `
  <section class="front">
    <header>
      <span class="${card.color}">${card.suite}</span> ${card.display}
    </header>
    <div class="suite ${card.color}">${card.suite}</div>
    <footer>
      <span class="${card.color}">${card.suite}</span> ${card.display}
    </footer>        
  </section>
  <section class="back"></section>`;

  placeholderEl?.insertAdjacentElement("beforeend", el);
}

function updateCount() {
  if (leftEl) {
    leftEl.innerHTML = `${deck.length + 1} kort kvar`;
  }
}

function lower(e) {
  if (deck.length > 0 && attempts > 1) {
    // Shift cards
    previousCard = activeCard;

    // Pick a new
    let picked = pickCard();
    setCard(picked);

    // Evaluate picked card
    if (activeCard.value < previousCard.value) {
      // if true
      updateScore(10);
    } else {
      // if false
      updateAttempts();
    }

    // Update card count ui
    updateCount();
  } else {
    let picked = pickCard();
    setCard(picked);

    setTimeout(() => {
      gameOverEl?.classList.toggle("show");
    }, 600);
  }
}

function higher(e) {
  if (deck.length > 0 && attempts > 1) {
    // Shift cards
    previousCard = activeCard;

    // Pick a new
    let picked = pickCard();
    setCard(picked);

    // Evaluate picked card
    if (activeCard.value > previousCard.value) {
      // if true
      updateScore(10);
    } else {
      // if false
      updateAttempts();
    }

    // Update card count ui
    updateCount();
  } else {
    let picked = pickCard();
    setCard(picked);

    setTimeout(() => {
      gameOverEl?.classList.toggle("show");
    }, 600);
  }
}

function equal(e) {
  if (deck.length > 0 && attempts > 1) {
    // Shift cards
    previousCard = activeCard;

    // Pick a new
    let picked = pickCard();
    setCard(picked);

    // Evaluate picked card
    if (activeCard.value == previousCard.value) {
      // if true
      updateScore(100);
    } else {
      // if false
      updateAttempts();
    }

    // Update card count ui
    updateCount();
  } else {
    let picked = pickCard();
    setCard(picked);

    setTimeout(() => {
      gameOverEl?.classList.toggle("show");
    }, 600);
  }
}

function updateAttempts() {
  // Timer for cardanimation to complete
  setTimeout(() => {
    attempts--;
    if (attemptsEl) {
      attemptsEl.innerHTML = attempts.toString();
    }
  }, 600);
}

function updateScore(factor = 10) {
  // Timer for cardanimation to complete
  setTimeout(() => {
    // Score count algorithm can be refactored to include risk taking
    score += previousCard.value * factor;
    if (scoreEl) {
      scoreEl.innerHTML = score.toString();
    }
  }, 600);
}
