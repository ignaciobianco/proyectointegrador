const express = require('express');
const router = express.Router();
let { body } = require("express-validator");
const productController = require('../controllers/productController')
let db = require("../database/models");
const Productos = require("../database/models/Producto")


let productAddValidation = [
    body("imagen")
     .notEmpty().withMessage("Agregue una foto del producto"),
    body("nombre")
     .notEmpty().withMessage("Agregue el nombre del producto"),
    body("descripcion")
     .notEmpty().withMessage("Agregue una descripcion del producto"),
]

router.get('/product-add', productController.addProduct);
router.post('/product-add', productAddValidation, productController.agregarProducto)
router.get('/', productController.productos);

router.get('/search-results', productController.resultadosBusqueda);

router.get('/:id', productController.productos);

router.get("/product-edit/:id",productController.editProduct)
router.post("/product-edit/:id",productController.update)

router.post('/deleteProduct', productController.del)

module.exports = router;