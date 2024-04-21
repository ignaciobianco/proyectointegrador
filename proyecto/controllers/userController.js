const db = require('../db/index');
const userController = {
    
    login: function (req, res) {
        return res.render('login', {
        })
    },

    profileEdit: function (req, res) {
        return res.render('profile-edit', {})
    },
    profile: function (req, res) {
        const usuario = db.usuario;
        return res.render('profile', {
            perfil: usuario
        })
    },

    register: function (req, res) {
        return res.render('register', {})
    },

    headerlogueado: function (req, res) {
        const usuario = db.usuario;
        return res.render('headerlogueado', {
            perfil: usuario
        })
    }
    };

    
    
    
    
module.exports = userController