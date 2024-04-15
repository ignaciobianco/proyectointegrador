const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')



router.get('/', productController.index)
router.get('/login/', productController.login);
router.get('/product-add/', productController.addProduct);
router.get('/product/', productController.productos);
router.get('/profile-edit/', productController.profileEdit);
router.get('/profile/', productController.profile);
router.get('/register/', productController.register);
router.get('/search-results/', productController.resultadosBusqueda);
module.exports = router;