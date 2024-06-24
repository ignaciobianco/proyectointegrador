const express = require('express');
const router = express.Router();
let { body } = require("express-validator");
const productController = require('../controllers/productController');
let db = require("../database/models");

let productAddValidation = [
    body("imagen").notEmpty().withMessage("Agregue una foto del producto"),
    body("nombre").notEmpty().withMessage("Agregue el nombre del producto"),
    body("descripcion").notEmpty().withMessage("Agregue una descripcion del producto"),
];

let commentValidation = [
    body('comentario')
        .notEmpty().withMessage('El comentario no puede estar vacío')
        .isLength({ min: 3 }).withMessage('El comentario debe tener al menos 3 caracteres')
];

router.get('/product-add/:id', productController.addProduct);
router.post('/product-add/:id', productAddValidation, productController.agregarProducto);
router.get('/', productController.productos);

router.get('/search-results', productController.resultadosBusqueda);

router.get('/:id', productController.productos);

router.get("/product-edit/:id", productController.editProduct);
router.post("/product-edit/:id", productController.update);

router.post('/deleteProduct/:id', productController.del);
router.post('/:id/Product', commentValidation, productController.agregarComentario);

module.exports = router;