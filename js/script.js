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
    arrBlue = [];
    sliceArrBlue =[];
    sortArrBlue = [];
    arrBrownNormal = [];
    sliceArrBrown = [];
    sliceArrBrownNormal = [];
    sortArrBrown = [];
    sortArrBrownNormal = [];
    sortArrBrownAll = [];
    arrGreen = [];
    sortArrGreen = [];
    sliceArrGreen = [];
    firstStage = [];
    secondStage = [];
    thirdStage = [];
    stack = [];
    stackFlat = [];
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
    arrBlue = [];
    sliceArrBlue =[];
    sortArrBlue = [];
    arrBrownNormal = [];
    sliceArrBrown = [];
    sliceArrBrownNormal = [];
    sortArrBrown = [];
    sortArrBrownNormal = [];
    sortArrBrownAll = [];
    arrGreen = [];
    sortArrGreen = [];
    sliceArrGreen = [];
    firstStage = [];
    secondStage = [];
    thirdStage = [];
    stack = [];
    stackFlat = [];
  });
});

// shuffle Button

shuffleButton.addEventListener("click", (e) => {
  shuffleButton.classList.add("hidden");
  currentState.classList.remove("hidden");
  deck.classList.remove("hidden");
  lastCard.classList.remove("hidden");
  selectAncient();
  chooseDifficultyLevel();
  });

// select Ancient

function selectAncient() {
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


// first ancient

// select dots very easy level

// blue dots

let arrBlue = [];
let sliceArrBlue =[];
let sortArrBlue = [];

// shuffle array randomly

function sortBlue() {
  sortArrBlue = arrBlue.sort(function() {
    return Math.random() - 0.5;
  });
}

// cut to two values

function sliceBlue() {
  sliceArrBlue = sortArrBlue.slice(0, 2);
}

function makeDeckOfBlueCards() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty === 'easy') {
      arrBlue.push(dataBlue[i]);
    }
    sortBlue();
    sliceBlue();
  }
}

// brown dots

let arrBrown = [];
let arrBrownNormal = [];
let sliceArrBrown = [];
let sliceArrBrownNormal = [];
let arrBrownAll = [];
let sortArrBrown = [];
let sortArrBrownNormal = [];
let sortArrBrownAll = [];

// shuffle array randomly

function sortBrownNoNormal() {
  sortArrBrown = arrBrown.sort(function() {
    return Math.random() - 0.5;
  });
}

// shuffle array normal randomly

function sortBrownNormal() {
  sortArrBrownNormal = arrBrownNormal.sort(function() {
    return Math.random() - 0.5;
  });
}

// cut to four values

function sliceBrownNormal() {
  sliceArrBrownNormal = sortArrBrownNormal.slice(0, 4);
}

// merge into one array

function brownAll() {
  arrBrownAll = sortArrBrown.concat(sliceArrBrownNormal);
}

// shuffle array arrBrownAll randomly

function sortBrownAll() {
  sortArrBrownAll = arrBrownAll.sort(function() {
    return Math.random() - 0.5;
  });
}

function makeDeckOfBrownCards() {
  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty === 'easy') {
      arrBrown.push(dataBrown[i]);
    }
    if(dataBrown[i].difficulty === 'normal') {
      arrBrownNormal.push(dataBrown[i]);
    }
    sortBrownNoNormal();
    sortBrownNormal();
    sliceBrownNormal();
    brownAll();
    sortBrownAll();
  }
}

// green dots

let arrGreen = [];
let sortArrGreen = [];
let sliceArrGreen = [];

//shuffle array randomly

function sortGreen() {
  sortArrGreen = arrGreen.sort(function() {
    return Math.random() - 0.5;
  });
}

function makeDeckOfGreenCards() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'easy') {
      arrGreen.push(dataGreen[i]);
    }
    sortGreen();
  }
}

// add Stage

// add first Stage

let firstStage = [];
let cardPush

function makeFirstStage() {
  cardPush = sliceArrBlue.pop();
  firstStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  firstStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  firstStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  firstStage.push(cardPush);
}

// add second Stage

let secondStage = [];

function makeSecondStage() {
  cardPush = sliceArrBlue.pop();
  secondStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  secondStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  secondStage.push(cardPush);
}

// add third Stage

let thirdStage = [];

function makeThirdStage() {
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush= sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  thirdStage.push(cardPush);
}

// common deck of cards

let stack = [];
let stackFlat = [];

function makeCommonDesk() {
  stack.push(thirdStage);
  stack.push(secondStage);
  stack.push(firstStage);
  stackFlat = stack.flat();
}

// show Cards
let topElement
function showCards() {
  topElement = stackFlat[stackFlat.length - 1];
  if(stackFlat.length > 0) {
    stackFlat.forEach((card) => {
      lastCard.style.backgroundImage = topElement.src;
    });
    stackFlat.pop();
  } else {
    lastCard.style.backgroundImage = "";
  }
  checkTracker();
}

deck.addEventListener("click", showCards);

// make deck

function seeDataVeryEasyLevel() {
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
      blues[0].innerHTML = (blues[0].innerText - 1);
    } else if(blues[0].innerText == 0  && blues[1].innerText > 0) {
      blues[1].innerHTML = (blues[1].innerText - 1);
    } else if(blues[0].innerText == 0  && blues[1].innerText == 0 && blues[2].innerText > 0) {
      blues[2].innerHTML = (blues[2].innerText - 1);
    }
  } 
}

function checkTrackerBrown() {
  if(topElement.color === 'brown') {
    if(browns[0].innerText > 0) {
      browns[0].innerHTML = (browns[0].innerText - 1);
    } else if(browns[0].innerText == 0  && browns[1].innerText > 0) {
      browns[1].innerHTML = (browns[1].innerText - 1);
    } else if(browns[0].innerText == 0  && browns[1].innerText == 0 && browns[2].innerText > 0) {
      browns[2].innerHTML = (browns[2].innerText - 1);
    }
  } 
}

function checkTrackerGreen() {
  if(topElement.color === 'green') {
    if(greens[0].innerText > 0) {
      greens[0].innerHTML = (greens[0].innerText - 1);
    } else if(greens[0].innerText == 0  && greens[1].innerText > 0) {
      greens[1].innerHTML = (greens[1].innerText - 1);
    } else if(greens[0].innerText == 0  && greens[1].innerText == 0 && greens[2].innerText > 0) {
      greens[2].innerHTML = (greens[2].innerText - 1);
    }
  } 
}

function checkTracker() {
  checkTrackerBlue();
  checkTrackerBrown();
  checkTrackerGreen();
}

// select dots easy level

// blue dots

function makeDeckOfBlueCardsEasy() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty != 'hard') {
      arrBlue.push(dataBlue[i]);
    }
    sortBlue();
    sliceBlue();
  }
}

// brown dots

// cut to nine values

function sliceBrown() {
  sliceArrBrown = arrBrown.slice(0, 9);
}

// shuffle array randomly

function sortBrown() {
  sortArrBrownAll = sliceArrBrown.sort(function() {
    return Math.random() - 0.5;
  });
}

function makeDeckOfBrownCardsEasy() {
  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty != 'hard') {
      arrBrown.push(dataBrown[i]);
    }
    sliceBrown();
    sortBrown();
  }
}

// green dots

// cut to five values

function sliceGreen() {
  sliceArrGreen = arrGreen.slice(0, 5);
}

// shuffle array randomly

function sortSliceGreen() {
  sortArrGreen = sliceArrGreen.sort(function() {
    return Math.random() - 0.5;
  });
}


function makeDeckOfGreenCardsEasy() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty != 'hard') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreen();
    sortSliceGreen();
  }
}

function seeDataEasyLevel() {
  makeDeckOfBlueCardsEasy();
  makeDeckOfBrownCardsEasy();
  makeDeckOfGreenCardsEasy();
  makeFirstStage();
  makeSecondStage();
  makeThirdStage();
  makeCommonDesk();
}

// select dots Medium level

// blue dots

function makeDeckOfBlueCardsMedium() {
  for (let i = 0; i < dataBlue.length; i++) {
    arrBlue.push(dataBlue[i]);
    sortBlue();
    sliceBlue();
  }
}

// brown dots

function makeDeckOfBrownCardsMedium() {
  for (let i = 0; i < dataBrown.length; i++) {
    arrBrown.push(dataBrown[i]);
    sliceBrown();
    sortBrown();
  }
}

// green dots

function makeDeckOfGreenCardsMedium() {
  for (let i = 0; i < dataGreen.length; i++) {
    arrGreen.push(dataGreen[i]);
    sliceGreen();
    sortSliceGreen();
  }
}

function seeDataMediumLevel() {
  makeDeckOfBlueCardsMedium();
  makeDeckOfBrownCardsMedium();
  makeDeckOfGreenCardsMedium();
  makeFirstStage();
  makeSecondStage();
  makeThirdStage();
  makeCommonDesk();
}

// select dots High level

// blue dots

function makeDeckOfBlueCardsHigh() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty != 'easy') {
      arrBlue.push(dataBlue[i]);
    }
    sortBlue();
    sliceBlue();
  }
}

// brown dots

function makeDeckOfBrownCardsHigh() {
  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty != 'easy') {
      arrBrown.push(dataBrown[i]);
    }
    sliceBrown();
    sortBrown();
  }
}

// green dots

function makeDeckOfGreenCardsHigh() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty != 'easy') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreen();
    sortSliceGreen();
  }
}

function seeDataHighLevel() {
  makeDeckOfBlueCardsHigh();
  makeDeckOfBrownCardsHigh();
  makeDeckOfGreenCardsHigh();
  makeFirstStage();
  makeSecondStage();
  makeThirdStage();
  makeCommonDesk();
}

// select dots Very High level

// blue dots

function makeDeckOfBlueCardsVeryHigh() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty === 'hard') {
      arrBlue.push(dataBlue[i]);
    }
    sortBlue();
    sliceBlue();
  }
}

// brown dots

function makeDeckOfBrownCardsVeryHigh() {
  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty === 'hard') {
      arrBrown.push(dataBrown[i]);
    }
    if(dataBrown[i].difficulty === 'normal') {
      arrBrownNormal.push(dataBrown[i]);
    }
    sortBrownNoNormal();
    sortBrownNormal();
    sliceBrownNormal();
    brownAll();
    sortBrownAll();
  }
}

// green dots

function makeDeckOfGreenCardsVeryHigh() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'hard') {
      arrGreen.push(dataGreen[i]);
    }
    sortGreen();
  }
}

function seeDataVeryHighLevel() {
  makeDeckOfBlueCardsVeryHigh();
  makeDeckOfBrownCardsVeryHigh();
  makeDeckOfGreenCardsVeryHigh();
  makeFirstStage();
  makeSecondStage();
  makeThirdStage();
  makeCommonDesk();
}

// second ancient

// select dots very easy level

// green dots

// cut to four values

function sliceGreenSecond() {
  sliceArrGreen = arrGreen.slice(0, 4);
}

//shuffle array randomly

function sortGreenSecond() {
  sortArrGreen = sliceArrGreen.sort(function() {
    return Math.random() - 0.5;
  });
}

function makeDeckOfGreenCardsSecond() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'easy') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreenSecond();
    sortGreenSecond();
  }
}

// add Stage

// add first Stage

function makeFirstStageSecond() {
  cardPush = sliceArrBlue.pop();
  firstStage.push(cardPush);
  cardPush = sliceArrBlue.pop();
  firstStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  firstStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  firstStage.push(cardPush);
}

// add second Stage

function makeSecondStageSecond() {
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  secondStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  secondStage.push(cardPush);
}

// add third Stage

function makeThirdStageSecond() {
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush= sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrBrownAll.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  thirdStage.push(cardPush);
  cardPush = sortArrGreen.pop();
  thirdStage.push(cardPush);
}

function seeDataVeryEasyLevelSecond() {
  makeDeckOfBlueCards();
  makeDeckOfBrownCards();
  makeDeckOfGreenCardsSecond();
  makeFirstStageSecond();
  makeSecondStageSecond();
  makeThirdStageSecond();
  makeCommonDesk();
}

// select dots easy level

// green dots

function makeDeckOfGreenCardsSecondEasy() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty != 'hard') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreenSecond();
    sortGreenSecond();
  }
}

function seeDataVeryEasyLevelSecondEasy() {
  makeDeckOfBlueCardsEasy();
  makeDeckOfBrownCardsEasy();
  makeDeckOfGreenCardsSecondEasy();
  makeFirstStageSecond();
  makeSecondStageSecond();
  makeThirdStageSecond();
  makeCommonDesk();
}

// select dots Medium level

// green dots

function makeDeckOfGreenCardsSecondMedium() {
  for (let i = 0; i < dataGreen.length; i++) {
    arrGreen.push(dataGreen[i]);
    sliceGreenSecond();
    sortGreenSecond();
  }
}

function seeDataVeryEasyLevelSecondMedium() {
  makeDeckOfBlueCardsMedium();
  makeDeckOfBrownCardsMedium();
  makeDeckOfGreenCardsSecondMedium();
  makeFirstStageSecond();
  makeSecondStageSecond();
  makeThirdStageSecond();
  makeCommonDesk();
}

// select dots High level

// green dots

function makeDeckOfGreenCardsSecondHigh() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty != 'easy') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreenSecond();
    sortGreenSecond();
  }
}

function seeDataVeryEasyLevelSecondHigh() {
  makeDeckOfBlueCardsHigh();
  makeDeckOfBrownCardsHigh();
  makeDeckOfGreenCardsSecondHigh();
  makeFirstStageSecond();
  makeSecondStageSecond();
  makeThirdStageSecond();
  makeCommonDesk();
}

// select dots Very High level

// green dots

function makeDeckOfGreenCardsSecondVeryHigh() {
  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'hard') {
      arrGreen.push(dataGreen[i]);
    }
    sliceGreenSecond();
    sortGreenSecond();
  }
}

function seeDataVeryEasyLevelSecondVeryHigh() {
  makeDeckOfBlueCardsVeryHigh();
  makeDeckOfBrownCardsVeryHigh();
  makeDeckOfGreenCardsSecondVeryHigh();
  makeFirstStageSecond();
  makeSecondStageSecond();
  makeThirdStageSecond();
  makeCommonDesk();
}

function chooseDifficultyLevel() {
  if(difficulties[0].classList.contains('active-button') && ancientCards[0].classList.contains('active')) {
    seeDataVeryEasyLevel();
  } else if(difficulties[1].classList.contains('active-button') && ancientCards[0].classList.contains('active')){
    seeDataEasyLevel();
  } else if(difficulties[2].classList.contains('active-button') && ancientCards[0].classList.contains('active')){
    seeDataMediumLevel();
  } else if(difficulties[3].classList.contains('active-button') && ancientCards[0].classList.contains('active')){
    seeDataHighLevel();
  } else if(difficulties[4].classList.contains('active-button') && ancientCards[0].classList.contains('active')){
    seeDataVeryHighLevel();
  } else if(difficulties[0].classList.contains('active-button') && ancientCards[1].classList.contains('active')) {
    seeDataVeryEasyLevelSecond();
  } else if(difficulties[1].classList.contains('active-button') && ancientCards[1].classList.contains('active')){
    seeDataVeryEasyLevelSecondEasy();
  } else if(difficulties[2].classList.contains('active-button') && ancientCards[1].classList.contains('active')){
    seeDataVeryEasyLevelSecondMedium();
  } else if(difficulties[3].classList.contains('active-button') && ancientCards[1].classList.contains('active')){
    seeDataVeryEasyLevelSecondHigh();
  } else if(difficulties[4].classList.contains('active-button') && ancientCards[1].classList.contains('active')){
    seeDataVeryEasyLevelSecondVeryHigh();
  } else if(difficulties[0].classList.contains('active-button') && ancientCards[2].classList.contains('active')) {
    console.log('1')
  } else if(difficulties[1].classList.contains('active-button') && ancientCards[2].classList.contains('active')){
    console.log('2')
  } else if(difficulties[2].classList.contains('active-button') && ancientCards[2].classList.contains('active')){
    console.log('3')
  } else if(difficulties[3].classList.contains('active-button') && ancientCards[2].classList.contains('active')){
    console.log('4')
  } else if(difficulties[4].classList.contains('active-button') && ancientCards[2].classList.contains('active')){
    console.log('5')
  } else if(difficulties[0].classList.contains('active-button') && ancientCards[3].classList.contains('active')) {
    console.log('1')
  } else if(difficulties[1].classList.contains('active-button') && ancientCards[3].classList.contains('active')){
    console.log('2')
  } else if(difficulties[2].classList.contains('active-button') && ancientCards[3].classList.contains('active')){
    console.log('3')
  } else if(difficulties[3].classList.contains('active-button') && ancientCards[3].classList.contains('active')){
    console.log('4')
  } else if(difficulties[4].classList.contains('active-button') && ancientCards[3].classList.contains('active')){
    console.log('5')
  }
}