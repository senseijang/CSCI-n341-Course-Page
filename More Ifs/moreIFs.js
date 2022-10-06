/**************************************
 TITLE: moreIFs.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 4 October 2022
 PURPOSE: To practice conditionals using switches and nested if statements
 LAST MODIFIED ON: 4 October 2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 4 October 2022: Initial build
***************************************/

$(document).ready(() => {
  // x0, y0 are initial position or current
  let strx0 = prompt("What is your current latitude?");
  let stry0 = prompt("What is your current longitude?");

  // x, y is the position you want to go to
  let strx = prompt("What is your destination's latitude?");
  let stry = prompt("What is your destination's longitude?");

  // storing into different integer variables
  // using modulus to keep the range between [-180, 180]
  let intx0, inty0, intx, inty;
  intx0 = parseInt(strx0) % 180;
  inty0 = parseInt(stry0) % 180;
  intx = parseInt(strx) % 180;
  inty = parseInt(stry) % 180;

  // using dx, dy to find direction
  let intdx = intx - intx0;
  let intdy = inty - inty0;

  // echo user input
  let elemUserInput = document.getElementById("echo");
  elemUserInput.innerHTML = `Current latitude: ${intx0}<br />
                             Current longitude: ${inty0}<br />
                             Target latitude: ${intx}<br />
                             Target longitude: ${inty}<br />`;

  let elemIfElse = document.getElementById("ifElse");
  elemIfElse.textContent = "If-else: ";

  /* Need to check for 0 diff first as eval short circuits if at the end.
     Using the logic given in the lab will result in the short circuits and we don't want that */
  if (intdx == 0 && intdy == 0) {
    // no deviation => at the place
    elemIfElse.textContent += "Land Ho!";
  } else if (intdx >= 0 && intdy >= 0) {
    // pos x, pos y => NE
    elemIfElse.textContent += "Head northeast!";
  } else if (intdx <= 0 && intdy >= 0) {
    // neg x, pos y => NW
    elemIfElse.textContent += "Head northwest!";
  } else if (intdx <= 0 && intdy <= 0) {
    // neg x, neg y => SW
    elemIfElse.textContent += "Head southwest!";
  } else if (intdx >= 0 && intdy <= 0) {
    // pos x, neg y => SE
    elemIfElse.textContent += "Head southeast!";
  } else {
    // something went wrong :/
    elemIfElse.textContent += "ERROR IN CALCULATION";
  }

  // eval with switch
  let elemSwitch = document.getElementById("caseSwitch");
  elemSwitch.textContent = "Switch-case: ";
  switch (true) {
    case intdx == 0 && intdy == 0:
      elemSwitch.textContent += "Land Ho!";
      break;
    case intdx >= 0 && intdy >= 0:
      elemSwitch.textContent += "Head northeast!";
      break;
    case intdx <= 0 && intdy >= 0:
      elemSwitch.textContent += "Head northwest!";
      break;
    case intdx <= 0 && intdy <= 0:
      elemSwitch.textContent += "Head southwest!";
      break;
    case intdx >= 0 && intdy <= 0:
      elemSwitch.textContent += "Head southeast!";
      break;
    default:
      elemSwitch.textContent += "ERROR IN CALCULATION";
      break;
  }
});
