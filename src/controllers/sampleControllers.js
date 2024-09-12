const path = require("path");

const indexHtml = path.resolve("public", "index.html");
const infosHtml = path.resolve("public", "infos.html");

// Fonction pour la route "/"
const Accueil = (req, res) => {
  res.sendFile(indexHtml);
};

// Fonction pour la route "/Bienvenue"
const Bienvenue = (req, res) => {
  res.send(
    `<h1>Bienvenue sur express-2000</h1> <li> <a href="/redirection-accueil">redirection-accueil</a></li> `
  );
};

// Fonction pour la route "/infos"
// const infosPage = (req, res) => {
//   res.sendFile(infosHtml);
// };

// Fonction pour la route '/infos'
const infosPage = (req, res) => {
  res.json({ nom: "Aragorn", Age: 87 });
};

// Fonction pour la route '/acces-interdit'
const interditPage = (req, res) => {
  res.status(403).send(`<h2>Oups, Acces refusé</h2> 
        <li> <a href="/redirection-accueil">redirection-accueil</a></li>`);
};

// Fonction pour la route '/redirection-accueil'
const redirectionPage = (req, res) => {
  res.redirect("/");
};

// Fonction pour la route '*'
const status = (req, res) => {
  res.status(404).send("Oups, Erreur 404 - Page non trouvée");
};

// Export des fonctions pour les rendre disponibles à d'autres modules
module.exports = {
  Accueil,
  Bienvenue,
  infosPage,
  interditPage,
  redirectionPage,
  status,
};
