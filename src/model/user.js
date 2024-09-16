const connection = require ('../../config/db');

class User {
    //Create
    static addUser(userData, callback){
        connection.query("INSERT INTO user (nom, email) VALUES (?, ?)", userData,callback)
    }
    // Update
    static updateUser(userData, userId, callback){
        const queryData = [...userData,userId];
        connection.query("UPDATE user SET nom = ?, email=? WHERE id = ?", queryData, callback );
    }
    // Read
    static getUser(callback){
        connection.query("SELECT * FROM user", callback);
    }
    // Delete
    static deleteUser(userId,callback){
        connection.query("DELETE FROM user WHERE id=?", userId, callback);
    }
}

module.exports = User;