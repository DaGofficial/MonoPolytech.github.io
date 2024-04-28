let caisseCommunaute = ["Password invalid, please try again"];
let chance = ["Password invalid, please try again"];

// get the password from the cookie
// The getCookie function is defined in password.js
const password = getCookie("password");
if (vp(password)) {
  // If the password is valid, load the JSON file
  caisseCommunaute = loadArrayFromJSON("cards.json", "communaute");
  chance = loadArrayFromJSON("cards.json", "chance");
}

function loadArrayFromJSON(path, keyname) {
  // loads the JSON file at the given path. The JSON file contains an object with keyname keys.
  // The keyname value is an array of strings, which should be returned.

  let xhr = new XMLHttpRequest();
  xhr.open("GET", path, false);
  xhr.send();
  let response = JSON.parse(xhr.responseText);
  return response[keyname];
}

function tirageCaisseCommunaute() {
  clearMessages();
  const resultDiv = document.getElementById("result");
  const randomCard =
    caisseCommunaute[Math.floor(Math.random() * caisseCommunaute.length)];
  resultDiv.textContent = randomCard;
  resultDiv.parentElement.style.backgroundColor = "#04ADEC"; // Définir la couleur de fond en bleu pour la carte "Caisse de communauté"
}

function tirageChance() {
  clearMessages();
  const resultDiv = document.getElementById("result");
  const randomCard = chance[Math.floor(Math.random() * chance.length)];
  resultDiv.textContent = randomCard;
  resultDiv.parentElement.style.backgroundColor = "#EB6D00"; // Définir la couleur de fond en orange pour la carte "Chance"
}

function clearMessages() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  resultDiv.style.backgroundColor = "#f9f9f9"; // Remettre la couleur du padding en gris par défaut lorsque la carte est effacée
}
