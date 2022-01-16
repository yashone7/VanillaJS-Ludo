/**
 * TODO:
 *
 * when user clicks on the roll dice button - random number between 1 and 6
 * should be generated - done
 *
 * turns should be exchanged after each roll of dice unless the user gets 6 as value
 *
 * event listeners should be attached to coins so that can interact can be interacted
 * with. - done
 *
 * actions - release coin || move coin - done
 *
 * 1. roll dice
 * 2. determine whose turn it is?
 * 3. check whether the value is 6
 *   3a. if it is 6 then turn remains same and wait for user's action to pick a new coin
 *       or to move a existing coin
 *   3b. the coin should moved according to the number on the dice
 * 4. finish up the turn and change turn to the next player
 *    4a. if the turn equals 4 then next turn is 0
 *
 * if initialPosition of coin === 0 then release the coin
 *
 * if coin.id === coinName then -> check isReleased - done
 *
 * get the current parent element's index number ie cells index where the icon is placed
 * and add the number to current index number, find the elements index number by id and place
 * append it there.
 *
 */

const turns = ["RED", "GREEN", "BLUE", "YELLOW"];
let currentPlayer = "";
let currentTurn = 0;
let coinDetails = [
  {
    color: "RED",
    noOfCoinsInSafeArea: 0,
    coinState: [
      {
        coinName: "red-1",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "red-2",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "red-3",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "red-4",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
    ],
  },
  {
    color: "GREEN",
    noOfCoinsInSafeArea: 0,
    coinState: [
      {
        coinName: "green-1",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "green-2",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "green-3",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "green-4",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
    ],
  },
  {
    color: "BLUE",
    noOfCoinsInSafeArea: 0,
    coinState: [
      {
        coinName: "blue-1",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "blue-2",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "blue-3",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "blue-4",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
    ],
  },
  {
    color: "YELLOW",
    noOfCoinsInSafeArea: 0,
    coinState: [
      {
        coinName: "yellow-1",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "yellow-2",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "yellow-3",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
      {
        coinName: "yellow-4",
        initalPosition: 0,
        currentPosition: 0,
        isReleased: false,
        isInsideFinalZone: false,
      },
    ],
  },
];

let curerntDiceValue;
const dice = document.getElementById("dice");
const controlPanel = document.getElementsByClassName("control-panel")[0];
// const cells = Array.from(document.getElementsByClassName("cells"));
const upTopCells = Array.from(
  document.querySelectorAll(`[data-cell-direction="up-top"]`)
).reverse();

const yellowCoins = Array.from(document.getElementsByClassName("coin-yellow"));
const blueCoins = Array.from(document.getElementsByClassName("coin-blue"));
const redCoins = Array.from(document.getElementsByClassName("coin-red"));
const greenCoins = Array.from(document.getElementsByClassName("coin-green"));

upTopCells.forEach((cell, index) => cell.setAttribute("index", index + 6));

// const red_1 = document.getElementById("red-1");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

dice.addEventListener("click", () => {
  console.log("clicked");
  curerntDiceValue = generateRandomNumber(1, 6);
  //   const currentValueText = document.createElement("p");
  //   currentValueText.classList.add("dice-value");
  //   currentValueText.innerText = `The current value is ${curerntDiceValue}`;
  //   controlPanel.appendChild(currentValueText);
  currentPlayer = turns[currentTurn];
  console.log(curerntDiceValue, currentPlayer);
  if (currentPlayer === "RED") {
    if (curerntDiceValue === 6) {
      console.log("currrent player is red please choose your action");
      // here write logic to -> release coin or move coin
    }
  }

  console.log(curerntDiceValue);
});

// red_1.addEventListener("click", () => {
//   console.log("clicked");
//   red_1.remove();
// });

redCoins.forEach((coin) => {
  coin.addEventListener("click", () => {
    // here we need to remove the coin and add it elsewhere
    // console.log(coin.id);
    let { coinState } = coinDetails[0];
    const _coin = document.getElementById(coin.id);
    const result = coinState.find((e) => e.coinName === coin.id);
    if (currentPlayer === "RED") {
      console.log(currentPlayer, curerntDiceValue);
      if (!result.isInsideFinalZone) {
        if (curerntDiceValue === 6) {
          // move coin or release coin
          console.log(curerntDiceValue);
          // const result = coinState.find((e) => e.coinName === coin.id);
          if (!result.isReleased) {
            console.log("release coin");
            result.isReleased = true;
            curerntDiceValue = 0;
            coinDetails[0].coinState.map((e) => {
              if (e.coinName === coin.id) {
                e.isReleased === true;
              }
            });
            // const _coin = document.getElementById(coin.id);
            _coin.remove();
            const pos = document.querySelectorAll('[data-cell-safe="safe-3"]');
            pos[0].appendChild(_coin);
          }
          // the use of this piece of code is - if the user still wants to move the coin
          // even after getting 6
          else {
            console.log(`move ${curerntDiceValue} places`);
            const parentElement = _coin.parentElement;
            console.log(parentElement);
            parentElement.removeChild(_coin);
            let newPosition =
              Number(parentElement.getAttribute("index")) + curerntDiceValue;
            console.log(newPosition);
            if (newPosition > 50) {
              newPosition = newPosition - 50;
              console.log(newPosition);
              const newElement = document.querySelectorAll(
                `[data-red-zone="${newPosition}"]`
              )[0];
              newElement.appendChild(_coin);
            }
            const newElement = document.querySelectorAll(
              `[index="${newPosition}"]`
            )[0];
            newElement.appendChild(_coin);
            console.log(newElement);
          }
          // if it is six and released move as many places
        }
        // here this piece of code helps us to move the coin
        // from the starting position
        else {
          // move only the coin that has been released
          // const result = coinState.find((e) => e.coinName === coin.id);
          if (!result.isReleased) {
            console.log("coin not released");
            return;
          } else {
            console.log(`move ${curerntDiceValue} places`);
            const parentElement = _coin.parentElement;
            console.log(parentElement);
            parentElement.removeChild(_coin);
            let newPosition =
              Number(parentElement.getAttribute("index")) + curerntDiceValue;
            console.log(newPosition);
            if (newPosition > 50) {
              coinDetails[0].coinState.map((e) => {
                if (e.coinName === coin.id) {
                  e.isInsideFinalZone === true;
                }
              });
              newPosition = newPosition - 50;
              console.log(newPosition);
              const newElement = document.querySelectorAll(
                `[data-red-zone="${newPosition}"]`
              )[0];
              newElement.appendChild(_coin);
            } else {
              const newElement = document.querySelectorAll(
                `[index="${newPosition}"]`
              )[0];

              newElement.appendChild(_coin);
              console.log(newElement);
            }
          }
        }
      } else {
        console.log("inside final zone");
      }
    }
    // console.log("clicked", coin.id);
    console.log(coinDetails);
  });
});

yellowCoins.forEach((coin) => {
  coin.addEventListener("click", () => {
    // here we need to remove the coin and add it elsewhere
    console.log("clicked", coin.id);
  });
});

blueCoins.forEach((coin) => {
  coin.addEventListener("click", () => {
    // here we need to remove the coin and add it elsewhere
    console.log("clicked", coin.id);
  });
});

greenCoins.forEach((coin) => {
  coin.addEventListener("click", () => {
    // here we need to remove the coin and add it elsewhere
    console.log("clicked", coin.id);
  });
});

// cells.forEach((cell, index) => {
//   cell.setAttribute("index", index);
// });

// console.log(upTopCells);
