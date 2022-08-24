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

// function getRandomNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let arrBlue = [];
let arrBrown = [];
let arrGreen = [];
let sliceArrBlue =[];
let arrBrownNormal = [];
let sliceArrBrownNormal = [];
let arrBrownAll = [];

function seeDataBlue() {
  for (let i = 0; i < dataBlue.length; i++) {
    if(dataBlue[i].difficulty === 'easy') {
      arrBlue.push(dataBlue[i])

      // lastCard.style.backgroundImage = dataBlue[i].src;

    }
    
    // рандомно перемешали массив

    const sortArrBlue = arrBlue.sort(function() {
      return Math.random() - 0.5;
    });

    // обрезали до двух значений

    sliceArrBlue = sortArrBlue.slice(0, 2)

  }

  for (let i = 0; i < dataBrown.length; i++) {
    if(dataBrown[i].difficulty === 'easy') {
      // console.log(dataBrown[i].difficulty);
      arrBrown.push(dataBrown[i])
    }
    if(dataBrown[i].difficulty === 'normal') {
      console.log(dataBrown[i].difficulty);
      arrBrownNormal.push(dataBrown[i]);
    }

    // рандомно перемешали массив
    const sortArrBrown = arrBrown.sort(function() {
      return Math.random() - 0.5;
    });

    // рандомно перемешали массив
    const sortArrBrownNormal = arrBrownNormal.sort(function() {
      return Math.random() - 0.5;
    });

    // обрезали до двух значений

    sliceArrBrownNormal = sortArrBrownNormal.slice(0, 4)

    // 

    arrBrownAll = arrBrown.concat(sliceArrBrownNormal);

    
  }

  for (let i = 0; i < dataGreen.length; i++) {
    if(dataGreen[i].difficulty === 'easy') {
      console.log(dataGreen[i].difficulty);
      arrGreen.push(dataGreen[i])

      //рандомно перемешали
      const sortArrGreen = arrGreen.sort(function() {
        return Math.random() - 0.5;
      });
    }
  }

  // console.log(arrBlue)
  // console.log(sliceArrBlue)
  // console.log(arrGreen)
  console.log(arrBrown)
  console.log(sliceArrBrownNormal)
  console.log(arrBrownAll)
}

// seeDataBlue()




