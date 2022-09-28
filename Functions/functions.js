/**************************************
 TITLE: functions.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 9/21/2022
 PURPOSE: To use functions to give outputs on a web page.
 LAST MODIFIED ON: 9/21/2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:

***************************************/

$(document).ready(() => {
  strIdArr = ["command1", "command2", "command3", "command4", "command5"];
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
