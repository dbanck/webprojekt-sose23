console.log("JS wird ausgeführt!");

let klickCounter = 0;

function fancy() {
  console.log("KLICK", klickCounter);
  klickCounter = klickCounter + 1;

  document.getElementById("cool-headline").classList.add("larger");
  document.getElementById("photo").style.transform = "rotate(45deg)";
}
