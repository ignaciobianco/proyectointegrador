const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')





router.get('/product-add', productController.addProduct);
router.get('/', productController.productos);

router.get('/search-results', productController.resultadosBusqueda);

router.get('/:id', productController.productos);

router.get("/product-edit/:id",productController.editProduct)
router.post("/product-edit/:id",productController.update)

module.exports = router;