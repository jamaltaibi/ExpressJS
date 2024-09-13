const express = require('express');
const mainRouter = require("./src/routes/route")
const connection = require('./config/db')
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', mainRouter);

//CREATE
app.post ('/create-user',(req, res) =>{
  const {nom, email} = req.body
  connection.query('INSERT INTO user (nom, email) VALUES (?, ? )', [nom, email],(err) =>{
    if (err) throw err ; 
    res.send('Utilisateur ajouté a la BDD')
  })
})
//UPDATE
app.put('/update-user/:id', (req,res) => {
  const {nom, email} = req.body;
  const userId = req.params.id;
  connection.query('UPDATE user SET nom = ?, email=? WHERE id = ?', [nom, email, userId], (err) =>{
    if (err) throw err ; 
    res.send('Utilisateur modifié avec succés')
  });
});
// READ
app.get('/user', (req,res) => {
  connection.query('SELECT * FROM user', (err, result) => {
    if (err) throw err ;
    res.json(result)
  });
});
//DELETE
app.delete('/delete-user/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('DELETE FROM user WHERE id=?', [userId], (err) =>{
    if (err) throw err ; 
    res.send('Utilisateur supprimé avec succés')
  }); 
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
  });