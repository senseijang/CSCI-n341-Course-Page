/**************************************
 TITLE: randomness.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 9/27/22
 PURPOSE: To use objects and random numbers for web page behavior
 LAST MODIFIED ON: 9/27/22
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 9/27/22: Initial Creation
***************************************/

$(document).ready(() => {
  // Pirate object constructor
  class objPirate {
    constructor(strName, strRank, intFavNum, htmlTag) {
      this.strName = strName;
      this.strRank = strRank;
      this.intFavNum = intFavNum;
      this.htmlTag = htmlTag;
      this.randNum = Math.floor(Math.random() * 10 + 1);
    }

    // If a phrase is passed, use the argument, else use the template.
    speak = (strPhrase) => {
      const elem = document.getElementById(this.htmlTag);

      // if phrase exists, use the phrase
      if (strPhrase) {
        elem.textContent = strPhrase;
        // else use template
      } else {
        elem.textContent = `${this.strRank} ${this.strName} chose ${this.randNum}!`;
      }
    };

    // Method added for the rubric, but I don't think it's necessary as the random number can be obtained on initialization.
    generateNewNum = () => {
      this.randNum = Math.floor(Math.random * 10 + 1);
    };
  }

  // Make captain + crewmates
  // Random number is initialized on construction.
  const objHenry = new objPirate("Henry", "Captain", 13, "captain");
  const objAnne = new objPirate("Anne", "First Mate", 42, "firstMate");
  const objFrancis = new objPirate("Francis", "Cabin Boy", 2, "cabinBoy");
  const objCharles = new objPirate("Charles", "Navigator", 16, "nav");

  // put guesses into array to find winner
  const arrObjs = [objAnne, objFrancis, objCharles];
  const correctNum = objHenry.randNum;

  // in global scope ig
  var winners = [];

  // check for winners, put all into an array
  for (i = 0; i < arrObjs.length; i++) {
    let currentObj = arrObjs[i];
    if (currentObj.randNum == correctNum) {
      winners.push(currentObj.strName);
    }
  }

  /*
   * declareWinner checks if any winners exist in the winners array
   * If they exist, their names will be listed and the photo will change to a thumbs up.
   * Else, no winners exists and the photo will change to a laughing photo.
   */

  function declareWinner() {
    // checks for winners existing
    let winnersElem = document.getElementById("winners");
    let captainImg = document.getElementById("reaction");

    if (winners.length > 0) {
      // if they exists, list all of them
      // note: uses shorthand if notation
      let strWinners = "";
      for (i = 0; i < winners.length; i++) {
        i == 0
          ? (strWinners = strWinners + " " + winners[i])
          : (strWinners = strWinners + ", " + winners[i]);
      }
      winnersElem.textContent = `${strWinners} guessed my number!`;
      captainImg.src = "./images/goodjob.webp";
    } else {
      // else no winner
      winnersElem.textContent = `There were no winners! Heheheha!`;
      captainImg.src = "./images/heheheha.jpg";
    }
  }

  // Text content manipulation
  objHenry.speak(
    "Argh! I'm thinking of a random number between 1-10! What do y'all reckon it is?"
  );

  // Uncomment the line below if you want to see the winners before the timeouts.
  //console.log(winners);

  // Buffer the guesses
  setTimeout(() => objAnne.speak(), 1000);
  setTimeout(() => objFrancis.speak(), 2000);
  setTimeout(() => objCharles.speak(), 3000);

  /*
   * This looks bad, but is really simple I promise.
   * This timeout says the number that the captain thought of after 5 seconds.
   * IF there is a winner, they will be declared.
   */
  setTimeout(() => {
    // says number
    objHenry.speak(`My random number was ${objHenry.randNum}!`);
    declareWinner();
  }, 5000);
});
