// Gibt die Zeichen auf der Konsole aus
console.log("Hallo 1");

/**
 * Noch mehr Ausgaben auf der Konsole
 */
console.log("Hallo 2");
console.log("Hallo 3");

// Fehler hier
console.log("Hallo 4");

let message;

message = "Hallo aus dem Karton";

console.log(message);

let firstName = "Basti";
firstName = "Daniel";

let var1;
let var2 = 30;
let answerToAllQuestions = 42;

const PI = 3.142;
const DAYS_OF_WEEK = 7;
const FIRST_NAME = "Basti";

console.log(DAYS_OF_WEEK);

let addition = var2 + 3;
let substraktion = var2 - 3;
let multiplikation = var2 * 3;
let division = var2 / 3;

console.log("Ergebnisse", addition, substraktion, multiplikation, division);

let summe = 238764 + 35897 + 489 + answerToAllQuestions;

console.log("Big sum", summe);

let alter = 42;
let preis;
let besteZahl = alter;
const KINDER_ALTER = 12;
const RETNER_ALTER = 60;

if (alter < KINDER_ALTER) {
  console.log("Du kommst kostenlos rein");
  preis = 0;
} else if (alter > RETNER_ALTER) {
  console.log("Alte Menschen bekommen Rabatt");
  preis = 10;
} else if (alter >= 20 && alter < 40) {
  console.log("Special David Preis");
} else {
  preis = 20;
}

console.log("Eintrittspreis", preis);

/**
 * let cookieBannerSeen = 'ja';
 *
 * if (cookieBannerSeen === 'ja') {
 *      // mach nix
 * } else {
 *      // zeige den Banner an
 * }
 */

function showMessage() {
  console.log("Hello World");
}

showMessage();
showMessage();
showMessage();
showMessage();

function showMessageForName(name) {
  console.log("Hello", name);

  if (name === "Basti") {
    console.log("Was gibt es zum Abendbrot?");
  }
}

showMessageForName("Basti");
showMessageForName("Daniel");

function addNumbers(zahl1, zahl2, zahl3) {
  let ergebnis = zahl1 + zahl2 + zahl3;

  return ergebnis;
}

let er = addNumbers(10, 3, 7);
console.log("Er nach Aufruf von addNumbers", er);

console.log("Mehr addition", addNumbers(30, 10, 10));
