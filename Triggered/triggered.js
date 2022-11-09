/**************************************
 TITLE: triggered.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/8/22
 PURPOSE: To test different jQuery events
 MODIFICATION HISTORY:
 11/8/22 Initial commit
***************************************/

// Function initialization

// function to show where mouse was clicked when double clicked
const dblMouseClickHandler = (e) => {
  $("#eventText")
    .append(
      `The mouse was double clicked @ <strong>X:${e.clientX} Y:${e.clientY}</strong><br>`
    )
    .css("font-style", "italic");
};

// function to show what key was pressed when a key is pressed down
const keyDownHandler = (e) => {
  $("#eventText")
    .append(`The <strong>${e.key}</strong> key was pressed! <br>`)
    .css("font-style", "italic");
};

// function to state when the window is resized
const windowResizeHandler = () => {
  $("#eventText")
    .append("<strong>The window has been resized!!!</strong><br>")
    .css("font-style", "italic");
};

// assign all functions to specific events
$(document).dblclick(dblMouseClickHandler);
$(document).keydown(keyDownHandler);
$(window).resize(windowResizeHandler);
