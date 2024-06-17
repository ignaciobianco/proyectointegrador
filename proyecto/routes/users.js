var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
const userController = require('../controllers/userController')
let db = require("../database/models");
const bcrypt = require('bcryptjs');
const Usuario = require('../database/models/Usuario');



let registerValidation = [
  body("email")
    .notEmpty().withMessage("Por favor complete el campo email.")
    .isEmail().withMessage("Por favor ingrese un email valido.")
    .custom(function (data) {
      return db.Usuario.findOne({
        where: { email: data },
      })
        .then(function (usuario) {
          if (usuario) {
            throw new Error("Este Email ya esta registrado")
          }
        })
    }),
  body("usuario")
    .notEmpty().withMessage("Por favor complete el nombre de usuario"),
  body("contraseña")
    .notEmpty().withMessage("Por favor complete la contraseña").bail()
    .isLength({ min: 4 }).withMessage("La contraseña debe ser mas larga"),
  body("fecha_nacimiento")
    .isDate().withMessage("Ingrese fecha de nacimiento"),
  body("dni")
    .isInt().withMessage("Ingrese numero de documento"),
]





let loginValidantion = [

  body("email")
    .notEmpty().withMessage("Por favor complete el campo email. Intente nuevamente")
    .isEmail().withMessage("Por favor ingrese un email valido. Intente nuevamente")

    .custom(function (value) {
      return db.Usuario.findOne({
        where: { email: value },
      })
        .then(function (user) {
          if (!user) {
            throw new Error('No existe una cuenta con este Email, Intente nuevamente')
          }
        })

    }),


  body("password")
    .notEmpty().withMessage("Por favor complete la contraseña. Intente nuevamente")

    .custom(function (value, { req }) {
      return db.Usuario.findOne({
          where: { email: req.body.email },
      })
      .then(function (Usuario) {
      let valueEncryptado = bcrypt.hashSync(value,10)
          if (!Usuario) {
              throw new Error('No existe una cuenta con este Email, Intente nuevamente');
          }
          
          // Compara la contraseña ingresada con la encriptada en la base de datos
          if (!bcrypt.compareSync(Usuario.contraseña , valueEncryptado)) {
              throw new Error('La contraseña es incorrecta, Intente nuevamente');
          }
      })
  })
  


]





router.get('/login', userController.login);
router.post('/login', loginValidantion, userController.processLogin)

router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);
router.post('/register', registerValidation, userController.store)

module.exports = router;
