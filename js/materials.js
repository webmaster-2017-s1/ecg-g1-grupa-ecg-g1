// funkcja do edytora tekstu
function wordFunction() {
var y = document.getElementById("spreadsheet");
var x = document.getElementById("text_editor");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    } else {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    document.querySelector('#text_editor').scrollIntoView({
      behavior: 'smooth'
    });
  }
}


// funkcja do arkusza kalkulacyjnego
function excelFunction() {
var y = document.getElementById("spreadsheet");
var x = document.getElementById("text_editor");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
    } else {
    y.style.visibility = "visible";
    x.style.visibility = "hidden";
    document.querySelector('#spreadsheet').scrollIntoView({
      behavior: 'smooth'
    });
  }
}





// przenoszenie na górę strony
function upFunction() {
    document.querySelector('#up').scrollIntoView({
      behavior: 'smooth'
    });
}
