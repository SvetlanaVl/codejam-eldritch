import dataBlue from "./dataBlue.js";
import dataBrown from "./dataBrown.js";
import dataGreen from "./dataGreen.js";

const ancientCards = document.querySelectorAll(".ancient-card");
const difficultyContainer = document.querySelector(".difficulty-container");
const difficulties = document.querySelectorAll(".difficulty");
const shuffleButton = document.querySelector(".shuffle-button");
const currentState = document.querySelector(".current-state");
const deck = document.querySelector(".deck");
const lastCard = document.querySelector(".last-card");
const containerDots = document.querySelectorAll(".dots-container");
const dots = document.querySelectorAll(".dot");
const greens = document.querySelectorAll(".green");
const browns = document.querySelectorAll(".brown");
const blues = document.querySelectorAll(".blue");

// console.log(ancientCards)

// ancient Card

ancientCards.forEach((ancientCard) => {
  ancientCard.addEventListener("click", (e) => {
    ancientCards.forEach((ancientCard) => {
      ancientCard.classList.remove("active");
    });
    ancientCard.classList.add("active");
    difficultyContainer.classList.remove("hidden");
    currentState.classList.add("hidden");
    deck.classList.add("hidden");
    lastCard.classList.add("hidden");
    arrBrown = [];
    arrBrownAll = [];
  });
});

// difficulty

difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", (e) => {
    difficulties.forEach((difficulty) => {
      difficulty.classList.remove("active-button");
    });
    difficulty.classList.add("active-button");
    shuffleButton.classList.remove("hidden");
    currentState.classList.add("hidden");
    deck.classList.add("hidden");
    lastCard.classList.add("hidden");
    arrBrown = [];
    arrBrownAll = [];
  });
});

// shuffle Button

shuffleButton.addEventListener("click", (e) => {
  shuffleButton.classList.add("hidden");
  currentState.classList.remove("hidden");
  deck.classList.remove("hidden");
  lastCard.classList.remove("hidden");
  
  selectAncient()
  
  seeDataBlue()
  });

// select Ancient

function selectAncient() {
  // if(ancientCards[0].classList.contains('active') && difficulties[0].classList.contains('active-button')) {
  if(ancientCards[0].classList.contains('active')) {
    addGreenDotFirstAncient();
    addBrownDotFirstAncient();
    addBlueDotFirstAncient();
  } else if(ancientCards[1].classList.contains('active')){
    addGreenDotSecondAncient();
    addBrownDotSecondAncient();
    addBlueDotSecondAncient();
  } else if(ancientCards[2].classList.contains('active')){
    addGreenDotThirdAncient();
    addBrownDotThirdAncient();
    addBlueDotThirdAncient();
  } else if(ancientCards[3].classList.contains('active')){
    addGreenDotFourthAncient();
    addBrownDotFourthAncient();
    addBlueDotFourthAncient();
  }
}


// First Ancient

function addGreenDotFirstAncient() {
  greens.forEach((green, index) => {
    if(index === 0) {
      green.innerHTML = 1;
    } else if(index > 0) {
      green.innerHTML = 2;
    }
  });
}

function addBrownDotFirstAncient() {
  browns.forEach((brown, index) => {
    if(index === 0) {
      brown.innerHTML = 2;
    } else if(index === 1) {
      brown.innerHTML = 3;
    } else if(index === 2) {
      brown.innerHTML = 4;
    }
  });
}

function addBlueDotFirstAncient() {
  blues.forEach((blue, index) => {
    if(index < 2) {
      blue.innerHTML = 1;
    } else if(index === 2) {
      blue.innerHTML = 0;
    } 
  });
}

// Second Ancient

function addGreenDotSecondAncient() {
  greens.forEach((green, index) => {
    if(index === 0) {
      green.innerHTML = 0;
    } else if(index === 1) {
      green.innerHTML = 1;
    } else if(index === 2) {
      green.innerHTML = 3;
    }
  });
}

function addBrownDotSecondAncient() {
  browns.forEach((brown, index) => {
    if(index === 0) {
      brown.innerHTML = 2;
    } else if(index === 1) {
      brown.innerHTML = 3;
    } else if(index === 2) {
      brown.innerHTML = 4;
    }
  });
}

function addBlueDotSecondAncient() {
  blues.forEach((blue, index) => {
    if(index === 0) {
      blue.innerHTML = 2;
    } else if(index > 0) {
      blue.innerHTML = 0;
    } 
  });
}

// ThirdAncient

function addGreenDotThirdAncient() {
  greens.forEach((green, index) => {
    if(index === 0) {
      green.innerHTML = 0;
    } else if(index === 1) {
      green.innerHTML = 2;
    } else if(index === 2) {
      green.innerHTML = 3;
    }
  });
}

function addBrownDotThirdAncient() {
  browns.forEach((brown, index) => {
    if(index === 0) {
      brown.innerHTML = 2;
    } else if(index === 1) {
      brown.innerHTML = 3;
    } else if(index === 2) {
      brown.innerHTML = 4;
    }
  });
}

function addBlueDotThirdAncient() {
  blues.forEach((blue, index) => {
    if(index < 2) {
      blue.innerHTML = 1;
    } else if(index === 2) {
      blue.innerHTML = 0;
    }
  });
}

// Fourth Ancient

function addGreenDotFourthAncient() {
  greens.forEach((green, index) => {
    if(index === 0) {
      green.innerHTML = 1;
    } else if(index === 1) {
      green.innerHTML = 3;
    } else if(index === 2) {
      green.innerHTML = 2;
    }
  });
}

function addBrownDotFourthAncient() {
  browns.forEach((brown, index) => {
    if(index < 2) {
      brown.innerHTML = 2;
    }  else if(index === 2) {
      brown.innerHTML = 4;
    }
  });
}

function addBlueDotFourthAncient() {
  blues.forEach((blue, index) => {
    if(index < 2) {
      blue.innerHTML = 1;
    } else if(index === 2) {
      blue.innerHTML = 0;
    } 
  });
}

// select dots

// blue dots

let arrBlue = [];
let sliceArrBlue =[];

function makeDeckOfBlueCards() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty === 'easy') {
      arrBlue.push(dataBlue[i])
    }
    
    // рандомно перемешали массив

    const sortArrBlue = arrBlue.sort(function() {
      return Math.random() - 0.5;
    });

    // обрезали до двух значений

    sliceArrBlue = sortArrBlue.slice(0, 2)

  }
}

// brown dots

let arrBrown = [];
let arrBrownNormal = [];
let sliceArrBrownNormal = [];
let arrBrownAll = [];
let sortArrBrownAll = [];

function makeDeckOfBrownCards() {
  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty === 'easy') {
      arrBrown.push(dataBrown[i]);
    }
    if(dataBrown[i].difficulty === 'normal') {
      arrBrownNormal.push(dataBrown[i]);
    }

    // рандомно перемешали массив easy
    const sortArrBrown = arrBrown.sort(function() {
      return Math.random() - 0.5;
    });

    // рандомно перемешали массив normal
    const sortArrBrownNormal = arrBrownNormal.sort(function() {
      return Math.random() - 0.5;
    });

    // обрезали до четырёх значений

    sliceArrBrownNormal = sortArrBrownNormal.slice(0, 4);

 // соединили в одинмассив

    arrBrownAll = sortArrBrown.concat(sliceArrBrownNormal);

    // рандомно перемешали массив arrBrownAll

    sortArrBrownAll = arrBrownAll.sort(function() {
      return Math.random() - 0.5;
    });
  }
}

// green dots

let arrGreen = [];
let sortArrGreen = [];

function makeDeckOfGreenCards() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'easy') {
      console.log(dataGreen[i].difficulty);
      arrGreen.push(dataGreen[i]);

    }

    //рандомно перемешали

    sortArrGreen = arrGreen.sort(function() {
      return Math.random() - 0.5;
    });
  }
}

// add Stage

// add first Stage

let firstStage = [];
let a

function makeFirstStage() {
  a = sliceArrBlue.pop()
  firstStage.push(a)
  a = sortArrBrownAll.pop()
  firstStage.push(a)
  a = sortArrBrownAll.pop()
  firstStage.push(a)
  a = sortArrGreen.pop()
  firstStage.push(a)
}

// add second Stage

let secondStage = [];

function makeSecondStage() {
  a = sliceArrBlue.pop()
  secondStage.push(a)
  a = sortArrBrownAll.pop()
  secondStage.push(a)
  a = sortArrBrownAll.pop()
  secondStage.push(a)
  a = sortArrBrownAll.pop()
  secondStage.push(a)
  a = sortArrGreen.pop()
  secondStage.push(a)
  a = sortArrGreen.pop()
  secondStage.push(a)
}

// add third Stage

let thirdStage = [];

function makeThirdStage() {
  a = sortArrBrownAll.pop()
  thirdStage.push(a)
  a = sortArrBrownAll.pop()
  thirdStage.push(a)
  a = sortArrBrownAll.pop()
  thirdStage.push(a)
  a = sortArrBrownAll.pop()
  thirdStage.push(a)
  a = sortArrGreen.pop()
  thirdStage.push(a)
  a = sortArrGreen.pop()
  thirdStage.push(a)
}

// common deck of cards

let stack = [];
let stackFlat = [];

function makeCommonDesk() {
  stack.push(thirdStage);
  stack.push(secondStage);
  stack.push(firstStage);

  stackFlat = stack.flat()
}

// show Cards
let topElement
function showCards() {
  topElement = stackFlat[stackFlat.length - 1];
  if(stackFlat.length > 0) {
    stackFlat.forEach((card) => {
      console.log(topElement)
      lastCard.style.backgroundImage = topElement.src;
    });
    stackFlat.pop();
  } else {
    lastCard.style.backgroundImage = "";
  }
  
  checkTracker()
}

deck.addEventListener("click", showCards);

// make deck

function seeDataBlue() {

  makeDeckOfBlueCards();
  makeDeckOfBrownCards();
  makeDeckOfGreenCards();
  makeFirstStage();
  makeSecondStage();
  makeThirdStage();
  makeCommonDesk();

}

// tracker

function checkTrackerBlue() {
  if(topElement.color === 'blue') {
    if(blues[0].innerText > 0) {
      blues[0].innerHTML = (blues[0].innerText - 1)
    } else if(blues[0].innerText == 0  && blues[1].innerText > 0) {
      blues[1].innerHTML = (blues[1].innerText - 1)
    } else if(blues[0].innerText == 0  && blues[1].innerText == 0 && blues[2].innerText > 0) {
      blues[2].innerHTML = (blues[2].innerText - 1)
    }
  } 
}

function checkTrackerBrown() {
  if(topElement.color === 'brown') {
    if(browns[0].innerText > 0) {
      browns[0].innerHTML = (browns[0].innerText - 1)
    } else if(browns[0].innerText == 0  && browns[1].innerText > 0) {
      browns[1].innerHTML = (browns[1].innerText - 1)
    } else if(browns[0].innerText == 0  && browns[1].innerText == 0 && browns[2].innerText > 0) {
      browns[2].innerHTML = (browns[2].innerText - 1)
    }
  } 
}

function checkTrackerGreen() {
  if(topElement.color === 'green') {
    if(greens[0].innerText > 0) {
      greens[0].innerHTML = (greens[0].innerText - 1)
    } else if(greens[0].innerText == 0  && greens[1].innerText > 0) {
      greens[1].innerHTML = (greens[1].innerText - 1)
    } else if(greens[0].innerText == 0  && greens[1].innerText == 0 && greens[2].innerText > 0) {
      greens[2].innerHTML = (greens[2].innerText - 1)
    }
  } 
}

function checkTracker() {
  checkTrackerBlue()
  checkTrackerBrown()
  checkTrackerGreen()

}





