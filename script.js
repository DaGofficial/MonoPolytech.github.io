// Ǥ  " ",

// Liste des cartes Caisse de communauté
const caisseCommunaute = [
  "Vous avez gagné le deuxième prix dans un concours de boisson. Distubuez 2Ǥ.",
  "Erreur du BDE en votre faveur. Distribuez 2Ǥ.",
  "Après votre coma éthylique vous faites une pause. Buvez un verre d'eau.",
  /*€*/"Vous vous faites attraper ivre par le Staff. Avancez directement au Stand PLS. Ne passez pas par la case Départ.",
  "Fin de l'année. Avancez jusqu'à la case Départ et finissez votre verre.",
  "Choisissez un joueur pour un shi-fu-tise. Le perdant bois 1Ǥ dans le verre de l'autre.",
  "Vous êtes retrouvé sobre en début de soirée. Buvez 2Ǥ.",
  "On vous à inviter à un after. Buvez 1Ǥ.",
  /*€*/"La police vous arrête pour ivresse publique. Avancez directement au Stand PLS. Ne passez par par la case Départ.",
  "Diagnostic médical, votre foie est en bonne santé. Buvez 1Ǥ.",
  "Tournée générale ! Tous les joueurs boivent 1Ǥ.",
  "Vous êtes élu président du BDE. Distribuez 2Ǥ.",
  "Vous retrouvez un ami en soirée. Buvez 1Ǥ.",
  "Tu arrêtes la drogue (temporairement)! Pour fêter ça buvez 1Ǥ.",
  "On vous offre un verre en soirée. Buvez 1Ǥ.",
  "Vous avez réussi votre année, BRAVO ! Buvez 10Ǥ.",
  "Semaine de campagne. Buvez 5Ǥ.",
  "Vous partez à un évent rézo. Déplacez vous à l'Event le plus proche. S'il appartient à un autre joueur vous buvez, sinon vous pouvez l'acheter.",
  "Un PMU est organisé. Malheureusement vous perdez et buvez 20Ǥ.",
  "Vous intégrez votre fillot(te). Buvez 1Ǥ et distribuez 1Ǥ.",
  "Vous regardez votre calendrier... On est jeudi, donc vous sortez avec les copaings. Buvez 1Ǥ.",
  "Grosse erreur de planning ! Avancez jusqu'au Week-End le plus proche. Si vous passez par la case Départ finissez votre verre.",
  "Before chez vous. Buvez 2Ǥ.",
  /*€*/"Vous partez au meilleur Event Rezo ! Avancez jusqu'à la Violette. Si elle appartient à un autre joueur vous buvez, sinon vous pouvez l'organiser.",
  // Ajoutez d'autres cartes ici
];

// Liste des cartes Chance
const chance = [
  /*€*/"Quart d'heure Water. Avancez directement au Quart d'heure Water et buvez un verre d'eau.",
  /*#*/"Vous êtes sobre, sortez du Stand PLS. Cette carte peut être concervée.",
  "Le barman vous offre un verre. Distribuez 1Ǥ.",
  "Le BDE organise un AW. Buvez 1Ǥ.",
  /*€*/"C'est le début de l'Inté ! Déplacez vous sur la case de l'Inté. S'il appartient à un autre joueur vous buvez, sinon vous pouvez l'organiser.",
  /*€*/"C'est la fin de l'Inté, vous partez au WEA. Déplacez vous sur la case du WEA. S'il appartient à un autre joueur vous buvez, sinon vous pouvez l'organiser.",
  "Vous tenez votre verre de la main droite. BUFFALO ! Buvez 10Ǥ.",
  "Il a très bien chanté, buvons à sa santé... Buvez 1Ǥ.",
  "Un Make u Move est lancé. Tous les joueurs boivent 1Ǥ.",
  "C'est l'heure des comptes. Buvez un nombre de Ǥ équivalent à votre nombre d'Events.",
  "Un mètre de shots a été commandé, vous participez. Buvez 1Ǥ.",
  "Le Staff ramène un nouveau bidon de Jaja. Buvez 1Ǥ.",
  /*$*/"Vous partez en soirée. Avancez de 5 cases.",
  /*€*/"Vous avez fini votre marathon des Events Rézo. Avancez jusqu'à la case Départ et finissez votre verre.",
  "C'est votre dixième verre. Buvez un verre d'eau.",
  /*$*/"Vous venez de vomir. Reculez de trois cases.",
  "Choisissez un joueur, chacun lance un dé. Le perdant bois 1Ǥ.",
  /*€*/"Shotgun ! Vous pouvez vous déplacer sur la case de votre choix et effectuer l'action requise.",
  /*#*/"Vous avez perdu votre gourde à un évent. La prochaine fois que vous devrez boire vous êtes immunisé.",
  "Vous êtes surpris avec une Peip1. Buvez 10Ǥ.",
  /*#*/"Vous êtes sobre, vous pouvez sortir du Stand PLS. Cette carte peut être concervée.",
  /*$*/"Vous staffez votre pote. Avancez un joueur de 3 cases. Il peut effectuer l'action de la case, sauf organiser un Event.",
  /*€*/"Vous voulez vous dévoiler au grand jour et au public. Déplacez vous jusqu'au Limousin. S'il appartient à un autre joueur vous buvez, sinon vous pouvez l'organiser.",
  /*€*/"Vous partez à la montagne ! Avancez jusqu'à la Pink. Si elle appartient à un autre joueur vous buvez, sinon vous pouvez l'organiser.",
  // Ajoutez d'autres cartes ici
];

function tirageCaisseCommunaute() {
  clearMessages();
  const resultDiv = document.getElementById("result");
  const randomCard = caisseCommunaute[Math.floor(Math.random() * caisseCommunaute.length)];
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