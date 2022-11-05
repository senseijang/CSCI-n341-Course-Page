/**************************************
 TITLE: pickme.js
 AUTHOR: Andy Jang (ASJ)
 CREATE DATE: 11/4/2022
 PURPOSE: To add interactivity on pickme.html
 LAST MODIFIED ON: 11/4/2022
 LAST MODIFIED BY: Andy Jang (ASJ)
 MODIFICATION HISTORY:
 11/4/2022 Initial commit
***************************************/

$(document).ready(() => {
  // append text to given tag
  const selectByTag = (strTag) => {
    const text = `<br>This element has the tag ${strTag}!`;
    $(strTag).append(text);
  };

  // append text to given class
  const selectByClass = (strClass) => {
    const text = `<br>This member's class is a ${strClass}!`;
    strClass = `.${strClass}`;
    $(strClass).append(text);
  };

  // change color of specified id to blue
  const selectByID = (strId) => {
    strId = `#${strId}`;
    $(strId).css("color", "blue");
  };

  // change border color and font weight of a class
  const changeLine = (strClass) => {
    strClass = `.${strClass}`;
    $(strClass)
      .css("border", "3px dashed red")
      .css("font-style", "italic")
      .css("color", "red");
  };

  // append text and embolden given tag and filter
  const filteredSelectByTag = (strTag, strFilter) => {
    const text = `<br> This element is ${strFilter} and member tag is ${strTag}!`;
    strTag = `${strTag}:${strFilter}`;
    $(strTag).append(text).css("fontWeight", "bold");
  };

  // append text and embolden given class and filter
  const filteredSelectByClass = (strClass, strFilter) => {
    const text = `<br> This element is ${strFilter} and member class is ${strClass}!`;
    strClass = `.${strClass}:${strFilter}`;
    $(strClass).append(text).css("fontWeight", "bold");
  };

  // append text and embolden given id and filter
  const filteredSelectById = (strId, strFilter) => {
    const text = `<br> This element is ${strFilter} and member id is ${strId}!`;
    strId = `#${strId}:${strFilter}`;
    $(strId).append(text).css("fontWeight", "bold");
  };

  /*
	Notes:
    Button1 will demonstrate jQuery selection by tag.
    Button2 will demonstrate jQuery selection by class.
    Button3 will demonstrate jQuery selection by id.
    Button4 will apply multiple instructions to a jQuery selection in a single line of code.
    Button5 will demonstrate filtered jQuery selection by tag.
    Button6 will demonstrate filtered jQuery selection by class.
    Button7 will demonstrate filtered jQuery selection by id.
	*/
  document.getElementById("button1").addEventListener("click", () => {
    selectByTag("p");
  });
  document.getElementById("button2").addEventListener("click", () => {
    selectByClass("mod");
  });
  document.getElementById("button3").addEventListener("click", () => {
    selectByID("pav");
  });
  document.getElementById("button4").addEventListener("click", () => {
    changeLine("group2");
  });
  document.getElementById("button5").addEventListener("click", () => {
    filteredSelectByTag("p", "first");
  });
  document.getElementById("button6").addEventListener("click", () => {
    filteredSelectByClass("random", "first");
  });
  document.getElementById("button7").addEventListener("click", () => {
    filteredSelectById("jonf", "first");
  });
  document.getElementById("reset").addEventListener("click", () => {
    location.reload();
  });
});
