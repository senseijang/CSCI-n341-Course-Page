/**************************************
 TITLE: login.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the login.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
 12/1/22 jQuery Custom Validations
 12/13/2022 commenting, polishing, and clean up
***************************************/

$(document).ready(function () {
  // const testUserName = "testadmin";
  // const testPassWord = "password";

  // button initialization
  $("input[type='reset']").button();
  $("input[type='submit']").button();

  // set validator
  $.validator.setDefaults({
    /*
     * submitHandler is a function in which it is executed when the submit button is pressed.
     * the handler checks the data against the rules provided when calling the validate function.
     */
    submitHandler: function () {
      // output submission
      const username = $("#userName").val(); // string username
      const password = $("#password").val(); // string password
      $("#outputArea").append(
        `Username: ${username} <br>Password: ${password} <br><br>`
      );
      //alert("login validated");
    },
    /*
     * errorPlacement defines where an error message should go for each element.
     * As there are only 2 fields only need to account for the 2 fields so a ternary operator can be used.
     *
     * @param: err is the error that is thrown.
     * @param: elem is the element to position the error message around.
     */
    errorPlacement: function (err, elem) {
      elem.attr("id") == "userName"
        ? err.insertAfter($("#userError"))
        : err.insertAfter($("#passError"));
    },
  });
  // validate function using custom object
  $("#login").validate({
    rules: {
      // <input name="userName">
      userName: { required: true, minlength: 4 },
      // <input name="password">
      password: { required: true, minlength: 4 },
    },
    messages: {
      // messages for userName input
      userName: {
        required: "Please enter a username",
        minlength: $.validator.format(
          "Username must be at least {0} characters"
        ),
      },
      // messages for password input
      password: {
        required: "Please enter a password",
        minlength: $.validator.format(
          "Password must be at least {0} characters"
        ),
      },
    },
  });
});
