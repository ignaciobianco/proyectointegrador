var express = require('express');
var router = express.Router();

router.get('/login/', productController.login);
router.get('/profile-edit', productController.profileEdit);
router.get('/profile', productController.profile);
router.get('/register', productController.register);

module.exports = router;
