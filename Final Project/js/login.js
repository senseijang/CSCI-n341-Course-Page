/**************************************
 TITLE: login.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the login.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
***************************************/

$(document).ready(() => {
  $("input[type='reset']").button();
  $("input[type='submit']").button();

  // set validator
  $.validator.setDefaults({
    submitHandler: () => {
      // output submission
      const username = $("#username").val();
      const password = $("#password").val();
      $("#outputArea").append(
        `Username: <br>${username} <br>Password: ${password}`
      );
      //alert("login validated");
    },
    errorPlacement: (err, elem) => {
      err.insertAfter(elem);
    },
  });
  $("#login").validate();
});
