const express = require('express');
const mainRouter = require("./src/routes/route")


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
  });