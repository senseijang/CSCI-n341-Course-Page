/**************************************
 TITLE: login.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the login.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
***************************************/

$(() => {
  $("#submitBtn")
    .button()
    .click(() => {
      $("#outputArea").append("Login attempted! <br>");
      return false;
    });
});
