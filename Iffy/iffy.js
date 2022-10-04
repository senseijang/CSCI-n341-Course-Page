/**************************************
 TITLE: iffy.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 4 October 2022
 PURPOSE: To play around with conditionals
 LAST MODIFIED ON: 4 October 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 4 October 2022: Initial commit
***************************************/

$(document).ready(() => {
  let strUserInput = prompt("Did you arrive to port on time?");
  let elemResponse = document.getElementById("response");
  let elemUserInput = document.getElementById("userInput");

  elemUserInput.textContent = `You said: "${strUserInput}"!`;

  strUserInput = strUserInput.toUpperCase();

  if (strUserInput == "YES") {
    elemResponse.textContent = "You have earned extra doubloons me matey!";
  } else if (strUserInput == "NO") {
    elemResponse.textContent = "Argh, you'll be fish food!";
  } else {
    elemResponse.textContent =
      "You speak nonsense there matey! Answer my question properly!";
  }
});
