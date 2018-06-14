// funkcja do edytora tekstu
function myFunction() {
var x = document.getElementById("text_editor");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    } else {
    x.style.visibility = "visible";
    }
    document.querySelector('#text_editor').scrollIntoView({ 
  behavior: 'smooth'
});
  }
