/**************************************
 TITLE: form.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the form.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
 12/1/2022 custom form validation
 12/13/2022 commenting, polishing, and clean up
***************************************/

$(document).ready(function () {
  /*
   * This anonymous IIFE function initializes all of the needed jQuery UI elements.
   */
  (function () {
    // the car makes for the autocorrect widget
    const makes = [
      "Abarth",
      "Alfa Romeo",
      "Aston Martin",
      "Audi",
      "Bentley",
      "BMW",
      "Bugatti",
      "Cadillac",
      "Chevrolet",
      "Chrysler",
      "Citroën",
      "Dacia",
      "Daewoo",
      "Daihatsu",
      "Dodge",
      "Donkervoort",
      "DS",
      "Ferrari",
      "Fiat",
      "Fisker",
      "Ford",
      "Honda",
      "Hummer",
      "Hyundai",
      "Infiniti",
      "Iveco",
      "Jaguar",
      "Jeep",
      "Kia",
      "KTM",
      "Lada",
      "Lamborghini",
      "Lancia",
      "Land Rover",
      "Landwind",
      "Lexus",
      "Lotus",
      "Maserati",
      "Maybach",
      "Mazda",
      "McLaren",
      "Mercedes-Benz",
      "MG",
      "Mini",
      "Mitsubishi",
      "Morgan",
      "Nissan",
      "Opel",
      "Peugeot",
      "Porsche",
      "Renault",
      "Rolls-Royce",
      "Rover",
      "Saab",
      "Seat",
      "Skoda",
      "Smart",
      "SsangYong",
      "Subaru",
      "Suzuki",
      "Tesla",
      "Toyota",
      "Volkswagen",
      "Volvo",
    ];

    // init autocorrect
    $("#make").autocomplete({
      source: makes,
    });

    // init spinner for car year
    $("#year").spinner({
      min: 1990,
      max: 2024,
    });

    // init datepicker for appt scheduler
    $("#datepicker").datepicker();

    // init buttons for form submission and reset
    $("input[type='reset']").button();

    // init jQuery radio buttons
    $("#referrals").buttonset();

    // init jQuery checkboxes
    $("input[type='checkbox']").checkboxradio();

    // init jQuery submit button
    $("input[type='submit']").button();
  })();

  // set default validator
  $.validator.setDefaults({
    /*
     * submitHandler mirrors all the data the user inputs if and only if everything is correctly validated
     */
    submitHandler: function () {
      // get all the data
      const name = $("#name").val(); // name of user
      const email = $("#email").val(); // email of user
      const phoneNum = $("#phoneNumber").val(); // phone number of user
      const make = $("#make").val(); // make of user's car
      const model = $("#model").val(); // model of user's car
      const year = $("#year").val(); // year of user's car

      // multiple selection
      var services = "";
      // NOTE: do not use callback functions with jquery, it will reset the DOM idk why
      // append all checked services to a string.
      $("input[name='services']:checked").each(function () {
        services += $(this).val() + " ";
      });

      // date of appointment.
      const prefDate = $("#datepicker").val();

      // check for which radio button is checked
      const referral = $("input[name='referral']:checked").val();

      // additional text input field
      const additional = $("#userInput").val();

      // append data to output
      $("#outputArea").append(`<br>Name: ${name}
                              <br>Email: ${email}
                              <br>Phone Number: ${phoneNum}
                              <br>Car Make: ${make}
                              <br>Car Model: ${model}
                              <br>Car Year: ${year}
                              <br>Selected Services: ${services}
                              <br>Preferred Date: ${prefDate}
                              <br>Referral: ${referral}
                              <br>Additional: ${additional}`);
      // alert("schedule form has validated");
    },

    /*
     * errorPlacement is a function that appends an error message below each input field if a requirement isn't met.
     *
     * @param: err is an error that the validator throws
     * @param: elem is the element that the error was thrown from
     */
    errorPlacement: function (err, elem) {
      switch (elem.attr("id")) {
        case "name":
          err.insertAfter($("#nameError"));
          break;
        case "email":
          err.insertAfter($("#emailError"));
          break;
        case "phoneNumber":
          err.insertAfter($("#phoneError"));
          break;
        case "make":
          err.insertAfter($("#makeError"));
          break;
        case "model":
          err.insertAfter($("#modelError"));
          break;
        case "year":
          err.insertAfter($("#yearError"));
          break;
        case "services":
          err.insertAfter($("#serviceError"));
          break;
        case "datepicker":
          err.insertAfter($("#dateError"));
          break;
        default:
          err.insertAfter(elem);
          break;
      }
    },
  });

  /*
   * this is the validation function that passes the object that contains the rules and messages associated with each input field.
   */
  $("#scheduleForm").validate({
    rules: {
      // rules that inputs must follow
      name: { required: true, maxlength: 20 }, // <input name="name">
      email: { required: true, email: true }, // <input name="email">
      phoneNumber: {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true,
      }, // <input name="phoneNumber">
      make: { required: true, maxlength: 20 }, // <input name="make">
      model: { required: true, maxlength: 20 }, // <input name="model">
      year: { required: true, digits: true, maxlength: 4, minlength: 4 }, // <input name="year">
      services: { required: true }, // <input name="services">
      prefDate: { required: true, date: true }, // <input name="prefDate">
      additional: { required: false, maxlength: 150 }, // <input name="additional">
    },
    // messages to show when a certain validation fails
    messages: {
      name: {
        required: "Please enter a name",
        maxlength: $.validator.format("Must not have more than {0} characters"),
      },
      email: {
        required: "Please enter an email",
        email: "Please enter a valid email address",
      },
      phoneNumber: {
        required: "Please enter a phone number",
        digits: "Please enter numbers only",
        maxlength: $.validator.format(
          "Phone number cannot be longer than {0} characters"
        ),
        minlength: $.validator.format("Phone number must be {0} characters"),
      },
      make: {
        required: "Please enter your car make",
        maxlength: $.validator.format(
          "Make cannot be longer than {0} characters"
        ),
      },
      model: {
        required: "Please enter your car model",
        maxlength: $.validator.format(
          "Model cannot be longer than {0} characters"
        ),
      },
      year: {
        required: "Please enter your car year",
        digits: "Please enter a valid car year",
        minlength: "Car year must be 4 digits",
      },
      services: {
        required: "Please specify at least 1 inquiry",
      },
      prefDate: {
        required: "Please enter a date",
        date: "Please enter a valid date",
      },
      additional: {
        maxlength: $.validator.format("Must not go past {0} characters"),
      },
    },
  });
});
