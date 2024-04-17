var express = require('express');
var router = express.Router();

router.get('/login', userController.login);
router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);

module.exports = router;
