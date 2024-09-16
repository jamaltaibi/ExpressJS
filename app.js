const express = require('express');

const mainRouter = require("./src/routes/route");
const userRouter = require("./src/routes/userRoute");

const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
  });