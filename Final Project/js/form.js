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
  $("button").button();
  $("#resetBtn").button();

  // init jQuery radio buttons
  $("#referrals").buttonset();

  // init jQuery checkboxes
  $("#interior").checkboxradio();
  $("#exterior").checkboxradio();
  $("#paintCorrection").checkboxradio();
  $("#ceramic").checkboxradio();
  $("#other").checkboxradio();

  $("submitBtn").click(() => {
    $("#outputArea").append("Form submitted!<br>");
  });
});
