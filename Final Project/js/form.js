/**************************************
 TITLE: form.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/17/22
 PURPOSE: To implement jQuery UI into the form.html file
 MODIFICATION HISTORY:
 11/17/22 Initial commit
***************************************/

$(document).ready(() => {
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
    min: 1970,
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

  $("input[type='submit']").button();

  $.validator.setDefaults({
    submitHandler: () => {
      // get all the data
      const name = $("#name").val();
      const email = $("#email").val();
      const phoneNum = $("#phoneNumber").val();
      const make = $("#make").val();
      const model = $("#model").val();
      const year = $("#year").val();

      // multiple selection
      var services = "";
      // NOTE: do not use callback functions with jquery, it will reset the DOM idk why
      $("input[name='service']:checked").each(function () {
        services += $(this).val() + " ";
      });

      const prefDate = $("#datepicker").val();

      // check for which radio button is checked
      const referral = $("input[name='referral']:checked").val();

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
    errorPlacement: (err, elem) => {
      err.insertAfter(elem);
    },
  });
  $("#scheduleForm").validate();
});
