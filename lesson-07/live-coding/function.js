console.log("JS lädt");

// Pseudocode in Kommentaren

function enlargeImage(smallImgElement) {
  // Klick auf kleine Bilder abfangen/registrieren und geklicktes Bild groß darstellen
  console.log("Klick");

  // 1. Element annehmen/finden
  console.log(smallImgElement);

  // 2. src- und alt-attribute des kleinen Bildes auslesen und zwischenspeichern
  let smallSrc = smallImgElement.src;
  let smallAlt = smallImgElement.alt;

  // 3. Bild-Attribute des großen Bildes ersetzen
  let bigImg = document.getElementById("largeCoffeeImage");

  bigImg.src = smallSrc;
  bigImg.alt = smallAlt;

  // aktuell groß angezeigte Bild in Galerie hervorheben
  // 1. alte Element nicht mehr hervorheben
  let oldActive = document.querySelector(".preview-active");
  oldActive.classList.remove("preview-active");

  // 2. das geklickte Bild hervorheben
  smallImgElement.classList.add("preview-active");
}

// Klick auf den Kaufen Button registrieren
function openModal() {
  // overlay-Element die Klasse .open hinzufügen
  const modal = document.getElementById("modal");

  modal.classList.add("open");
}

function getErrorElement() {
  return document.getElementById("error-msg");
}

// Klick auf den Close-Modal Button registrieren
function closeModal() {
  // vom overlay-Element die Klasse .open entfernen
  const modal = document.getElementById("modal");
  modal.classList.remove("open");

  // Eingaben rückgängig machen
  const emailInputElement = document.getElementById("email-input");
  emailInputElement.value = "";

  // const errorMsgElement = document.getElementById("error-msg");
  const errorMsgElement = getErrorElement();
  errorMsgElement.textContent = "";

  const signUpBtn = document.getElementById("signup-button");
  signUpBtn.disabled = true;
}

// auf Nutzereingaben im E-Mail-Feld reagieren
function validateEmail(emailInputElement) {
  //   console.log("Tastatureingabe");
  // E-Mail-Eingabe in JS erhalten
  const email = emailInputElement.value;

  // Signup-Button in JS erhalten
  const signUpBtn = document.getElementById("signup-button");

  // Error msg Element in JS erhalten
  const errorMsgElement = getErrorElement();

  // Prüfen, ob gültige Email
  if (email.includes("@") && email.includes(".de")) {
    // --- Button aktivieren
    signUpBtn.disabled = false;

    // --- Fehlermeldung verstecken
    errorMsgElement.textContent = "";
  }
  // wenn ungültig:
  else {
    // --- Button deaktivieren
    signUpBtn.disabled = true;

    // --- Fehlermeldung anzeigen
    errorMsgElement.textContent = "Ungültige E-Maileingabe";
  }
}

// Formular "absenden"
function signUp() {
  // Email in JS erhalten
  const emailInputElement = document.getElementById("email-input");

  // "fake" server request
  console.log(
    "Signup user for newsletter for stupidly expensive cup",
    emailInputElement.value
  );

  closeModal();
}
