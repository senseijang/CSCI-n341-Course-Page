/**************************************
 TITLE: multiWrites.js
 AUTHOR: Andy Jang
 CREATE DATE: 9 September 2022
 PURPOSE: To output elements using JS
 LAST MODIFIED ON: 9 September 2022
 LAST MODIFIED BY: Andy Jang
 MODIFICATION HISTORY:
 9 September 2022: Initial Commit
***************************************/

$(document).ready(() => {
  // This writes all of the elements that are deleted when using document.write()
  // Such a pain to rewrite all of the elements, but only way I could figure it out.
  document.write(
    `
    <link rel="stylesheet" href="./css/multiWrites.css" type="text/css" />
    <title>Multi-Writes</title>

    <h1>Using document.write()</h1>
    <div class='jstext'>Me name be andy jang, nice to meet y'all</div>
    <h1>Using .textContent:</h1>
    <div id='contentTag' class='jstext'></div>
    <h1>Using innerHTML:</h1>
    <div id='coolTag' class='jstext'></div>
    <br>
    <a href="./documentWrite.html">Seperate document write</a>
    <br><br>
    <a href="../index.html">Go back</a>
    `
  );

  // set text using .textContent
  let strMessage =
    "Ahoy! I be majorin' in computer science an' 'ope to make it to grad school to pursue a master's degree";
  var contentElement = document.getElementById("contentTag");
  contentElement.textContent = strMessage;

  // set text using innerHTML
  let strText = "Destiny 2 is for squares";
  var coolElement = document.getElementById("coolTag");
  coolElement.innerHTML = `<em>I enjoy playin' seafarin' voyages with me mates</em>`;
});
