const db = require('../database/models');
let bcriptjs = require('bcryptjs');
let { validationResult } = require("express-validator")
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { where } = require('sequelize');



const userController = {

    login: function (req, res) {
        return res.render('login', {})
    },

    processLogin: function (req, res) {
        let errores = validationResult(req);


        if (errores.isEmpty()) {



            if (req.body.recordarme !== undefined) {

                db.Usuario.findOne({
                    where :{email : req.body.email},
                })
                .then(function(usuario) {
    
                res.cookie('RecordarmeEmail', usuario.email , { maxAge: 1000 * 60 * 30 });
                res.cookie('RecordarmeID',usuario.id , { maxAge: 1000 * 60 * 30 });           
                req.session.IdUsuario = usuario.id
                })
                

                
                
            }

            db.Usuario.findOne({
                where :{email : req.body.email},
            })
            .then(function(usuario) {

            req.session.NombreUsuario = usuario.email
            req.session.IdUsuario = usuario.id
            return res.redirect('/')

                
            })

           






        }
        else {
            res.render('login', { errors: errores.mapped(), old: req.body })
        }







    },



    processLogout: function (req, res) {

        req.session.destroy();
        res.clearCookie('RecordarmeEmail');
        res.redirect('/');



    },



    profileEdit: function (req, res) {
        const usuario = db.usuario;
        return res.render('profile-edit', {

            perfil: usuario


        })
    },
    profile: function (req, res) {
        
        
        const UserId = req.params.id;
        
        db.Usuario.findOne({
            where :{id : UserId},

            include: [{
                association: 'productos' 
            },
            {
                association: 'comentarios'
            }
        ]

        })
        .then(function(info) {
                res.render("profile",{info : info})


            
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
    store: function (req, res) {
        let errors = validationResult(req);
        let form = req.body

        if (errors.isEmpty()) {
            let user = {
                email: form.email,
                usuario: form.usuario,
                contraseña: bcriptjs.hashSync(form.contraseña, 10),
                fecha_nacimiento: form.fecha_nacimiento,
                dni: form.dni,
                imagen_de_perfil: form.imagen_de_perfil
            }

            db.Usuario.create(user)
            .then(function(user) {
                return db.Usuario.findOne({
                    where: { email: req.body.email }
                });
            })
            .then(function(usuario) {
                req.session.UserName = req.body.email;
                req.session.UserId = usuario.id;


            const UserName = req.body.email
            req.session.UserName = UserName



            return res.redirect('/')
                return res.redirect('/');
            })
  
        } else {
            return res.render('register', { errors: errors.mapped(), old: req.body })
        }
    }

}






module.exports = userController