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

shuffleButton.addEventListener("click", (e) => {
  shuffleButton.classList.add("hidden");
  currentState.classList.remove("hidden");
  deck.classList.remove("hidden");
  lastCard.classList.remove("hidden");
  
  selectFirstAncient()
  
  // if(ancientCards[0].classList.contains('active')) {
  //   console.log('Y')
  // }
  // console.log(ancientCards[0].classList.contains('active'))
  });
// });

function selectFirstAncient() {
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


// }
// containerDots.forEach((containerDot) => {
//   console.log(containerDot[0])
// });


// ancientCards.addEventListener('click', event => {
//   console.log(event)
  // if(event.classList.contains('active')){
  //   console.log('yes')
  // }

// })
// function selectFirstAncient() {
//   ancientCards.forEach((ancientCard, index) => {
//     difficulties.forEach((difficulty, ind) => {
//       if(index === 0 && ind === 0){
//         console.log('yes')
//       }
      
//     });
//   });
// }


// ancientCards.forEach((ancientCard, index) => {
//   difficulties.forEach((difficulty, ind) => {
//     ancientCard.addEventListener("click", (e) => {
//       console.log(index)
//       if(index === 0){
//           console.log('yes')
//         }
//     });
//     difficulty.addEventListener("click", (e) => {
//       console.log(ind)
//       if(ind === 0){
//           console.log('yes')
//         }
//     });
//     if(index === 0){
//       console.log('s')
//     }
//   });
  
// });

