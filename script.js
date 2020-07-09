let button0 = document.querySelector("#square0");
let button1 = document.querySelector("#square1");
let button2 = document.querySelector("#square2");
let button3 = document.querySelector("#square3");
let button4 = document.querySelector("#square4");
let button5 = document.querySelector("#square5");
let button6 = document.querySelector("#square6");
let button7 = document.querySelector("#square7");
let button8 = document.querySelector("#square8");
let reset = document.querySelector("#reset-button");

let buttonArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let buttonIndex = 0;
let myTurn = "blue";
let freeze = false;
let message = document.querySelector("#game-msg");
message.innerHTML = "  ";
const click0 = (event) => {
  updateButton(0);
};

const click1 = (event) => {
  updateButton(1);
};

const click2 = (event) => {
  updateButton(2);
};

const click3 = (event) => {
  updateButton(3);
};

const click4 = (event) => {
  updateButton(4);
};

const click5 = (event) => {
  updateButton(5);
};

const click6 = (event) => {
  updateButton(6);
};

const click7 = (event) => {
  updateButton(7);
};

const click8 = (event) => {
  updateButton(8);
};

function refresh() {
  window.parent.location = window.parent.location.href;
  freeze = false;
}

const resetGame = (event) => {
  buttonArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  clickedButton.setAttribute("style", "background-color: gray");
  location.reload;
};

function checkWinner() {
  let draw = true;
  if (buttonArray[0] > 0) {
    if (
      buttonArray[0] === buttonArray[3] &&
      buttonArray[0] === buttonArray[6]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[0] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    } else {
      if (
        buttonArray[0] === buttonArray[1] &&
        buttonArray[0] === buttonArray[2]
      ) {
        draw = false;
        freeze = true;
        if (buttonArray[0] === 1) {
          message.innerHTML = "Blue wins!";
        } else {
          message.innerHTML = "Red wins!";
        }
      } else if (
        buttonArray[0] === buttonArray[4] &&
        buttonArray[0] === buttonArray[8]
      ) {
        draw = false;
        freeze = true;
        if (buttonArray[0] === 1) {
          message.innerHTML = "Blue wins!";
        } else {
          message.innerHTML = "Red wins!";
        }
      }
    }
  }

  if (buttonArray[2] > 0) {
    if (
      buttonArray[2] === buttonArray[4] &&
      buttonArray[2] === buttonArray[6]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[2] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    }
    if (
      buttonArray[2] === buttonArray[5] &&
      buttonArray[2] === buttonArray[8]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[2] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    }
  }
  if (buttonArray[1] > 0) {
    if (
      buttonArray[1] === buttonArray[4] &&
      buttonArray[1] === buttonArray[7]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[1] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    }
  }
  if (buttonArray[3] > 0) {
    if (
      buttonArray[3] === buttonArray[4] &&
      buttonArray[3] === buttonArray[5]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[3] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    }
  }
  if (buttonArray[6] > 0) {
    if (
      buttonArray[6] === buttonArray[7] &&
      buttonArray[6] === buttonArray[8]
    ) {
      draw = false;
      freeze = true;
      if (buttonArray[6] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins!";
      }
    }
  }
  for (let i = 0; i <= 8; i++) {
    if (buttonArray[i] === 0) {
      draw = false;
    }
  }
  if (draw === true) {
    message.innerHTML = "It's a tie. No winner!";
    freeze = true;
  }
}

function updateButton(buttonIndex) {
  if (freeze === true) {
    return;
  }
  if (buttonArray[buttonIndex] > 0) {
    message.innerHTML = "You cannot click there";
  } else {
    message.innerHTML = " ";
    if (myTurn === "blue") {
      buttonArray[buttonIndex] = 1;
      let myTest = document.querySelector("#square" + buttonIndex);
      let clickedButton = document.querySelector("#square" + buttonIndex);
      clickedButton.setAttribute("style", "background-color: " + myTurn);
      myTurn = "red";
      message.innerHTML = "Red's turn";
      checkWinner();
    } else if (myTurn === "red") {
      buttonArray[buttonIndex] = 2;
      let myTest = document.querySelector("#square" + buttonIndex);
      let clickedButton = document.querySelector("#square" + buttonIndex);
      clickedButton.setAttribute("style", "background-color: " + myTurn);
      myTurn = "blue";
      message.innerHTML = "Blue's turn";
      checkWinner();
    }
  }
}

button0.addEventListener("click", click0);
button1.addEventListener("click", click1);
button2.addEventListener("click", click2);
button3.addEventListener("click", click3);
button4.addEventListener("click", click4);
button5.addEventListener("click", click5);
button6.addEventListener("click", click6);
button7.addEventListener("click", click7);
button8.addEventListener("click", click8);

reset.addEventListener("click", resetGame);
