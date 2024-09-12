const express = require("express");
const router = express.Router();

// Importez les controllers associés
const sampleController = require('../controllers/sampleControllers');


// Définissez les routes associées aux fonctions du controller
router.get('/', sampleController.Accueil);
router.get('/Bienvenue', sampleController.Bienvenue);
router.get('/infos', sampleController.infosPage);
router.get('/acces-interdit', sampleController.interditPage);
router.get('/redirection-accueil', sampleController.redirectionPage);
router.get('*', sampleController.status);

module.exports = router;
