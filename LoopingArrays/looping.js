/**************************************
 TITLE: looping.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11 October 2022
 PURPOSE: To practice looping and numerical counting conversions
 LAST MODIFIED ON: 11 October 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 11 October 2022: Initial Commit
***************************************/

$(document).ready(() => {
  var strUserInput;
  let boolIsValid = false;

  // while not valid
  while (!boolIsValid) {
    strUserInput = prompt("Please enter 1 ascii charcter:");

    // if single charcter, exit
    if (strUserInput.length == 1) {
      boolIsValid = true;
    }
  }

  // mirror user input
  let elemMirror = document.getElementById("mirror");
  elemMirror.textContent = `You entered "${strUserInput}"`;

  // parse to ascii
  const intValue = strUserInput.charCodeAt(0);

  // parse to binary
  const binValue = intValue.toString(2);

  // show charcter's ascii and binary
  let elemBin = document.getElementById("bin");
  elemBin.textContent = `${strUserInput}'s ASCII value is ${intValue}. ${intValue} in binary is ${binValue}`;

  // split into array
  var arrBin = binValue.split("");

  // get element
  const elemResults = document.getElementById("results");

  // add binary to screen
  for (let i = 0; i < arrBin.length; i++) {
    let tag = document.createElement("p");
    var text;

    if (arrBin[i] == 0) {
      text = document.createTextNode(`${i + 1}) False`);
    } else if (arrBin[i] == 1) {
      text = document.createTextNode(`${i + 1}) True`);
    } else {
      text = document.createTextNode(`${i + 1}) Error`);
    }
    tag.appendChild(text);
    elemResults.appendChild(tag);
  }
});
