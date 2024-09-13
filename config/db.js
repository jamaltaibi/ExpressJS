const mysql = require('mysql2');
require ('dotenv').config();

// Creation d'une connexion à la BDD
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  
  
  connection.connect((err) => {
    if(err){
      console.log('Erreur de connexion a la base de donneés: ', err );
      
    } else {
      console.log(' Connecté a la base de données MYSQL');  
    }
  })

  module.exports = connection;