let isLarge = false;

function changeSize() {
  if (isLarge === false) {
    document.getElementById("my-cool-btn").style.padding = "30px 50px";
    document.getElementById("my-cool-btn").style.fontSize = "70px";

    isLarge = true;
  } else {
    document.getElementById("my-cool-btn").style.padding = "20px 40px";
    document.getElementById("my-cool-btn").style.fontSize = "50px";

    isLarge = false;
  }

  // der Code hier unten erzeugt das gleiche Ergebnis wie oben, nur sehr viel kürzer
  // document.getElementById("my-cool-btn").classList.toggle("larger");
}
