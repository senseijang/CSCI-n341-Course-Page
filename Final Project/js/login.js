/**************************************
 TITLE: login.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the login.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
 12/1/22 jQuery Custom Validations
***************************************/

$(document).ready(function () {
  // const testUserName = "testadmin";
  // const testPassWord = "password";

  // button initialization
  $("input[type='reset']").button();
  $("input[type='submit']").button();

  // set validator
  $.validator.setDefaults({
    submitHandler: function () {
      // output submission
      const username = $("#userName").val();
      const password = $("#password").val();
      $("#outputArea").append(
        `Username: ${username} <br>Password: ${password} <br><br>`
      );
      //alert("login validated");
    },
    // put errors below the input field
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
