const express = require("express");
const router = express.Router();


router.get("/Bienvenue", (req, res) => {
  res.send(`<h1>Bienvenue sur express-2000</h1> <li> <a href="/redirection-accueil">redirection-accueil</a></li> `);
});

router.get("/infos", (req, res) => {
  res.json({nom: 'Aragorn', Age: 87,});
});

router.get("/acces-interdit", (req, res) => {
    res.status(403).send(`<h2>Oups, Acces refusé</h2> 
        <li> <a href="/redirection-accueil">redirection-accueil</a></li>`);
});

router.get("/redirection-accueil", (req, res) => {
    res.redirect("/");
});

router.get("*", (req, res) => {
  res.status(404).send("Oups, Erreur 404 - Page non trouvée");
});

module.exports = router;
