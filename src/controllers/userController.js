const User = require('../model/user')

const addU = (req, res) => {
  const {nom, email} = req.body
  const userData  = [nom, email];
  User.addUser(userData,(err) => {
    if (err) throw err;
    res.send("Utilisateur ajouté a la BDD");
  })
};

const updateU = (req, res) => {
    const { nom, email } = req.body;
    const userData  = [nom, email];
    const userId = req.params.id;
    User.updateUser(userData, userId,(err) => {
        if (err) throw err;
        res.send("Utilisateur modifié avec succés");
      }
    );
  }

  const getU = (req, res) => {
    User.getUser((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  };

  const deleteU = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err) => {
      if (err) throw err;
      res.send("Utilisateur supprimé avec succés");
    });
  };

module.exports = {
  addU,
  updateU,
  getU,
  deleteU
};
