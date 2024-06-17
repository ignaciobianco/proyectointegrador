const db = require('../database/models');
let bcriptjs = require('bcryptjs');
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
        return res.render('register');
    },

    headerlogueado: function (req, res) {
        const usuario = db.usuario;
        return res.render('headerlogueado', {
            perfil: usuario
        })
    },
    store: function (req,res) {
        let errors = validationResult(req);
        let form = req.body

        if (errors.isEmpty()){
         let user = {
            email: form.email,
            usuario: form.usuario,
            contraseña: bcriptjs.hashSync(form.contraseña, 10),
            fecha_nacimiento: form.fecha_nacimiento,
            dni: form.dni,
            imagen_de_perfil: form.imagen_de_perfil
         }

         db.Usuario.create(user);
         res.redirect('/')
        } else {
            return res.render('register', {errors: errors.mapped(), old: req.body})
        }
}

    }
    

    
    
    
    
module.exports = userController