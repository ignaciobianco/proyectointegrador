const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')





router.get('/product-add', productController.addProduct);
router.get('/', productController.productos);
router.get('/search-results', productController.resultadosBusqueda);
module.exports = router;