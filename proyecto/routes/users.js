var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
const userController = require('../controllers/userController')
let db = require("../database/models");

let loginValidation = [
    body("email")
      .notEmpty().withMessage("Por favor complete el campo email.")
      .isEmail().withMessage("Por favor ingrese un email valido.")
      .custom(function(value){
        //Validar que el mail exista en la base de datos
        return db.User.findOne({
            where: {email: value }
        })
        .then(function(user){
            if(!user){
                throw new Error("El email no se encuentra registrado")
            }
        })
       
      }),
    body("usuario")
      .notEmpty().withMessage("Por favor complete el nombre de usuario"),
    body("contraseña")
      .notEmpty().withMessage("Por favor complete la contraseña").bail()
      .isLength({ min: 4 }).withMessage("La contraseña debe ser mas larga"),
    body("fecha_nacimiento")
      .isInt().withMessage("Ingrese fecha de nacimiento"),
    body("dni")
      .isInt().withMessage("Ingrese numero de documento"),
]



router.get('/login', userController.login);
router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);

module.exports = router;
