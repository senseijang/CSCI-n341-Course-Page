/**************************************
 TITLE: buttons.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 14 October 2022
 PURPOSE: To add functionality to buttons.html
 LAST MODIFIED ON: 14 October 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 14 October 2022: Initial commit
***************************************/

$(document).ready(() => {
  strIdArr = ["text1", "text2", "text3", "text4", "text5"];
  str1Arr = ["Demolish", "Devour", "Dominate", "Climb", "Charge"];
  str2Arr = [
    "e-girl(s)",
    "apple(s)",
    "battlefield(s)",
    "mountain(s)",
    "credit card(s)",
  ];

  // technically calls the function 5 times
  for (i = 0; i < strIdArr.length; i++) {
    setStr(
      strIdArr[i],
      Math.floor(Math.random() * 10 + 1),
      str1Arr[i],
      str2Arr[i],
      i
    );
  }

  // bonus part
  const clickedButton = () => {
    alert("Argh! Listen to my commands!");
  };

  const multiAlert = () => {
    alert("STOP BOTHERING ME OR YOU GET THE PLANK!");
  };

  // event handler
  const elemBtnHand1 = document.getElementById("btnHandler1");
  const elemBtnHand2 = document.getElementById("btnHandler2");

  elemBtnHand1.onclick = clickedButton;
  elemBtnHand2.onclick = clickedButton;

  // event listener
  const elemBtnListen1 = document.getElementById("btrListener1");
  const elemBtnListen2 = document.getElementById("btnListener2");

  elemBtnListen1.addEventListener("click", clickedButton, false);
  elemBtnListen2.addEventListener("click", clickedButton, false);

  // multi-event listener
  const elemMultiBtn = document.getElementById("btnMulti");
  elemMultiBtn.addEventListener(
    "click",
    () => {
      clickedButton();
      multiAlert();
    },
    false
  );
});

/*
 * setStr sets the string of a given id with a concatenated string using the index, random number, and 2 other strings.
 *
 * @param: strId = id tag of the element, intNum = random num to be concatenated, str1 = first part of command
 * @param (cont.): str2 = command resolve, index = the number of the command - 1 from for loop.
 *
 * @return void
 */
const setStr = (strId, intNum, str1, str2, index) => {
  let elem = document.getElementById(strId);
  elem.textContent = `Command #${index + 1}: ${str1} ${intNum} ${str2}!`;
};
