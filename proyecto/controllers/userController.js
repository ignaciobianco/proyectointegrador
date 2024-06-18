const db = require('../database/models');
let bcriptjs = require('bcryptjs');
let { validationResult } = require("express-validator")
const cookieParser = require('cookie-parser');



const userController = {
    
    login: function (req, res) {
        return res.render('login', {})
    },

    processLogin: function (req, res) {
        let errores = validationResult(req);
        console.log(req.body.recordarme);
        console.log(req.body.email);


        

        if (errores.isEmpty()) {
        
            if (req.body.recordarme !== undefined) {
                console.log(req.body.password);
                const psw = req.body.password
                const user = req.body.email
                res.cookie('RecordarmeEmail', user , { maxAge: 1000*60*5 }); 
                res.cookie('RecordarmePassword', psw , { maxAge:1000*60*5 }); 
                console.log(req.cookies.RecordarmeEmail);
                console.log(req.cookies.RecordarmePassword);
            }
            
        

        return res.redirect('/')

        

        }
        else{
            res.render('login', {errors:errores.mapped(), old: req.body})
        }



        
        
        
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