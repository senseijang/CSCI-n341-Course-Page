/**************************************
 TITLE: strings.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11 October 2022
 PURPOSE: To create names based on 1 name
 LAST MODIFIED ON: 11 October 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 11 October 2022: Initial creation
***************************************/

$(document).ready(() => {
  let boolSentry = true;
  var strName;

  // user input filtering
  while (boolSentry) {
    strName = prompt(
      "What is the name of your closest friend? (greater than 3 characters)"
    );
    if (strName.length > 3) {
      boolSentry = false;
    }
  }
  strName = strName.toLowerCase();

  // mirror user input
  var elemMirror = document.getElementById("mirror");
  elemMirror.textContent = `Your friend's name was ${strName}? Inspirational!`;

  // transition
  var elemTrans = document.getElementById("transition");
  elemTrans.textContent = `These are some ship names inspired by your friend:`;

  var arrNames = [];

  arrNames[0] = `${strName.charAt(0)} & company`; // charAt() #1
  arrNames[1] = `Thousand ${strName.charAt(0)}'s`; // charAt() #2

  const intIndex = strName.indexOf("o");

  // indexOf() #3, #4
  if (intIndex == -1) {
    arrNames[2] = `The destiny of ${strName}`;
    arrNames[3] = `Jolly Roger ${strName}`;
  } else {
    arrNames[2] = `${strName.substring(0, intIndex)}ometer`;
    arrNames[3] = `${strName.substring(0, intIndex)}-o-plenty!`;
  }

  arrNames[4] = `${strName.substring(0, 3)} & crew`; // substring #5
  arrNames[5] = `${strName.trim() ? strName.trim() : strName}'s Emerald`; // trim #6
  arrNames[6] = `${strName.substring(0, strName.length)}eous`; // substring #7
  arrNames[7] = `${strName.replace("a", "ae")}'s Diamond`; // replace #8
  arrNames[8] = `PARTY ROCK ${strName.toUpperCase()}S!`; // toUpperCase
  arrNames[9] = `${strName.toLowerCase()}'s hidden attack`; // toLowerCase
  arrNames[10] = `${strName}'s ambition`; // name
  arrNames[11] = `The magnificent ${strName}!`; // name

  var elemNames = document.getElementById("names");

  // print method
  for (let i = 0; i < arrNames.length; i++) {
    let tag = document.createElement("p");
    let text = document.createTextNode(`${i + 1}) ${arrNames[i]}`);
    tag.appendChild(text);
    elemNames.appendChild(tag);
  }
});
