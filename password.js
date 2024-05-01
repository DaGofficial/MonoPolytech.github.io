// Validation du mot de passe
// Fait avec amour par Paconsse : https://github.com/herbemalveillante
//
// DISCLAIMER : Si vous êtes ici parce que vous êtes un petit malin qui voulez tricher, sachez
// qu'il est important de soutenir financièrement les créateurs du jeu.
// Dans tous les cas, j'ai fait mon possible pour vous compliquer la tâche au maximum. Si vous
// parvenez à craquer le site malgré tout, je vous invite à me contacter pour me faire part de
// vos trouvailles : pacome.renimell@gmail.com

// We want to have a regex to validate a compatible password, that is hidden well enough in the final obfuscated code
// To allow the website to hold for at least a couple weeks

// Example : numbers add up to x, ascii values add up to y, order of the characters, etc.
// While still maintaining a coherent and easy to remember form

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function vp(password) {
  // A valid password must have the sum of it's non-numerical characters ascii values
  // equal to the sum of the numerical characters
  if (password.length < 1) {
    return false;
  }
  let asciiSum = 0;
  let numberSum = 0;
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      numberSum += parseInt(password[i]);
    } else {
      asciiSum += password.charCodeAt(i);
    }
  }

  // divide the asciiSum by thirty, keep the integer part and add the first decimal to it
  let asciiDivided = asciiSum / 30;
  let integer = Math.floor(asciiDivided);
  let decimal = asciiDivided - integer;
  decimal = Math.floor(decimal * 10);
  asciiSum = integer + decimal;
  if (asciiSum !== numberSum) {
    return false;
  } else {
    return true;
  }
}
// if we are on the index.html page :
if (window.location.pathname === "/index.html") {
  // Add a button to the dom that grabs the password from the input field, checks if it's valid and changes the background color accordingly
  document.getElementById("validate").addEventListener("click", function () {
    const password = document.getElementById("password").value;
    if (vp(password)) {
      document.body.style.backgroundColor = "#04ADEC";
      // set a cookie in the browser to store the password
      setCookie("password", password, 1);
      // redirect to the game.html page
      window.location.href = "game.html";
    } else {
      document.body.style.backgroundColor = "#EB6D00";
      // display an error message
      document.getElementById("error").textContent =
        "Le mot de passe est incorrect";
    }
  });
}

// When any page is loaded, check if a correct password is stored in the cookie
// If it is not, redirect to the index.html page.
if (!vp(getCookie("password"))) {
  if (window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
  }
}
