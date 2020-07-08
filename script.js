let button0 = document.querySelector("#square0");
let button1 = document.querySelector("#square1");
let button2 = document.querySelector("#square2");
let button3 = document.querySelector("#square3");
let button4 = document.querySelector("#square4");
let button5 = document.querySelector("#square5");
let button6 = document.querySelector("#square6");
let button7 = document.querySelector("#square7");
let button8 = document.querySelector("#square8");

let buttonArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let buttonIndex = 0;
let myTurn = "blue";
let message = document.querySelector("#game-msg");
console.log(message);
message.innerHTML = "test message";
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

function checkWinner() {
  console.log(buttonArray);
  if (buttonArray[0] > 0) {
    if (
      buttonArray[0] === buttonArray[3] &&
      buttonArray[0] === buttonArray[6]
    ) {
      if (buttonArray[0] === 1) {
        console.log("Blue wins");
        message.innerHTML = "Blue wins!";
        console.log(buttonArray);
      } else {
        message.innerHTML = "Red wins";
        console.log("Red wins");
      }
    } else {
      if (
        buttonArray[0] === buttonArray[1] &&
        buttonArray[0] === buttonArray[2]
      ) {
        if (buttonArray[0] === 1) {
          console.log("Blue wins");
          message.innerHTML = "Blue wins!";
        } else {
          console.log("Red wins");
          message.innerHTML = "Red wins";
        }
      } else if (
        buttonArray[0] === buttonArray[4] &&
        buttonArray[0] === buttonArray[8]
      ) {
        if (buttonArray[0] === 1) {
          message.innerHTML = "Blue wins!";
        } else {
          message.innerHTML = "Red wins";
        }
      }
    }
  }

  if (buttonArray[2] > 0) {
    if (
      buttonArray[2] === buttonArray[4] &&
      buttonArray[2] === buttonArray[6]
    ) {
      if (buttonArray[2] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins";
      }
    }
    if (
      buttonArray[2] === buttonArray[5] &&
      buttonArray[2] === buttonArray[8]
    ) {
      if (buttonArray[2] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins";
      }
    }
  }
  if (buttonArray[1] > 0) {
    if (
      buttonArray[1] === buttonArray[4] &&
      buttonArray[1] === buttonArray[7]
    ) {
      if (buttonArray[1] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins";
      }
    }
  }
  if (buttonArray[3] > 0) {
    if (
      buttonArray[3] === buttonArray[4] &&
      buttonArray[3] === buttonArray[5]
    ) {
      if (buttonArray[3] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins";
      }
    }
  }
  if (buttonArray[6] > 0) {
    if (
      buttonArray[6] === buttonArray[7] &&
      buttonArray[6] === buttonArray[8]
    ) {
      if (buttonArray[6] === 1) {
        message.innerHTML = "Blue wins!";
      } else {
        message.innerHTML = "Red wins";
      }
    }
  }
}

function updateButton(buttonIndex) {
  console.log(myTurn + " " + buttonIndex);
  console.log(buttonArray);
  console.log("Button " + buttonIndex + " clicked " + myTurn);
  if (buttonArray[buttonIndex] > 0) {
    // this button was already clicked
    console.log("You cannot click there");
    //message = document.querySelector("#game-msg").value;
    console.log(message);
  } else {
    // this button was not previously clicked
    if (myTurn === "blue") {
      buttonArray[buttonIndex] = 1;
      let myTest = document.querySelector("#square" + buttonIndex);
      console.log(myTest);
      let clickedButton = document.querySelector("#square" + buttonIndex);
      clickedButton.setAttribute("style", "background-color: " + myTurn);
      myTurn = "red";
      checkWinner();
    } else if (myTurn === "red") {
      buttonArray[buttonIndex] = 2;
      let myTest = document.querySelector("#square" + buttonIndex);
      console.log(myTest);
      let clickedButton = document.querySelector("#square" + buttonIndex);
      clickedButton.setAttribute("style", "background-color: " + myTurn);
      myTurn = "blue";
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
