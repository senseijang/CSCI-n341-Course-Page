/**************************************
 TITLE: moverShaker.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/10/22
 PURPOSE: To use jQuery effects specified by the Movers and Shakers lab on moverShaker.html
 MODIFICATION HISTORY:
 11/10/22 Initial commit
***************************************/

/*
  Checkpoints:
  [X] One of each event
  [X] Form element buttons in a fieldset
  [X] Named function for each effect lines 32 - 72
  [X] Multiple params in one function call line 53
  [X] jQuery chaining for function call line 59 - 60
  [X] check headers for html and js
  [X] validation

  Testing (imported from HTML):
  <!-- Tested in Microsoft Edge, Google Chrome, Mozilla Firefox -->
  <!-- Buttons in Firefox are rounded compared to Edge and Chrome -->
  <!-- Fieldset border is white in Firefox compared to Greenish in Edge and Chrome-->
*/

$(document).ready(() => {
  /* Named functions for each button */
  // reset css when hiding
  const hide = () => {
    resetcss();
    $("#target").hide();
  };
  const show = () => {
    $("#target").show();
  };
  // reset css when toggling
  const toggle = () => {
    resetcss();
    $("#target").toggle();
  };
  // reset css when hiding
  const slideUp = () => {
    resetcss();
    $("#target").slideUp();
  };
  const slideDown = () => {
    $("#target")
      .slideDown()
      // css function call with multiple parameters wrapped in an object
      .css({ border: "10px solid #2B65EC", "background-color": "#39FF14" });
  };
  const fadeIn = () => {
    $("#target")
      .fadeIn()
      // jQuery chaining for the css
      .css("border", "10px solid #39FF14")
      .css("background-color", "#2B65EC");
  };
  // reset css when hiding
  const fadeOut = () => {
    resetcss();
    $("#target").fadeOut();
  };
  const reset = () => {
    location.reload();
  };
  const goBack = () => {
    location.href = "../index.html";
  };
  const resetcss = () => {
    $("#target").css("border", "").css("background-color", "");
  };

  /* Assign each button to their respective functions */
  $("#hide").click(hide);
  $("#show").click(show);
  $("#toggle").click(toggle);
  $("#slideUp").click(slideUp);
  $("#slideDown").click(slideDown);
  $("#fadeOut").click(fadeOut);
  $("#fadeIn").click(fadeIn);
  $("#reset").click(reset);
  $("#goBack").click(goBack);
});
