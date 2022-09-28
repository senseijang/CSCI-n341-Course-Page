/**************************************
 TITLE: conversions.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 10 September 2022
 PURPOSE: To take input from a user and convert it into usable data.
 LAST MODIFIED ON: 10 September 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 10 Sep 2022: Initial creation
***************************************/

$(document).ready(() => {
  // gets the name of the user
  var strName = "";
  var strQuestion = "What is your name?";
  var strDefaultName = "Peg Leg O'Brien";

  strName = prompt(strQuestion, strDefaultName);

  // get the number of doubloons
  var strCoins = "";
  var strCoinQuery = "How many doubloons do you have?";
  var strDefaultCoins = "1";

  var intCoins = -1;
  var intValue = -1;

  strCoins = prompt(strCoinQuery, strDefaultCoins);
  intCoins = parseInt(strCoins);

  // value calculation
  const intConversionRate = 287;
  intValue = intCoins * intConversionRate;

  // concatenated string, PoC of literal string with ES6 Standard
  var strFinalOutput =
    "I, " +
    strName +
    ", have plundered " +
    strCoins +
    " gold doubloon(s) for a total profit of $" +
    intValue +
    ". Argh!";
  var strFinalOutputLiteral = `I, ${strName}, have plundered ${strCoins} gold doubloon(s) for a total profit of $${intValue}. Argh!`;

  // output to html
  var elemP = document.getElementById("jsOutput");
  elemP.textContent = strFinalOutput;
});
