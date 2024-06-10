const db = require('../db/index');
let { validationResult } = require("express-validator")

const userController = {
    
    login: function (req, res) {
        return res.render('login', {
        })
    },

    profileEdit: function (req, res) {
        const usuario = db.usuario;
        return res.render('profile-edit', {

        perfil: usuario

        
        })
    },
    profile: function (req, res) {
        const usuario = db.usuario;
        return res.render('profile', {
            perfil: usuario
        })
    },

    register: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()){
            
        }
        else{

console.log(errors)

        }


        return res.render('register', {})
    },

    headerlogueado: function (req, res) {
        const usuario = db.usuario;
        return res.render('headerlogueado', {
            perfil: usuario
        })
    },
    store: function (req,res) {
    console.log(req.body);
    return res.redirect('/register')
}

    }
    

    
    
    
    
module.exports = userController