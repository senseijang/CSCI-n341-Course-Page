/**************************************
 TITLE: ahoy.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 10-31-22
 PURPOSE: to add interactivity to ahoy.html
 LAST MODIFIED ON: 10-31-22
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 10-31-22 Initial commit
***************************************/

$(document).ready(() => {
  alert("jQuery has been initialized!");
  // Step #1 append button
  const appendBtn = document.getElementById("append");
  appendBtn.onclick = () => {
    $("p").append("<br>Shiver me timbers!");
  };

  // Step #2 overwrite button
  const overwriteBtn = document.getElementById("overwrite");
  overwriteBtn.onclick = () => {
    $("p").html("May your blade always be wet, and powder dry.");
  };
});
