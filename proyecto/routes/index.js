var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', productController.index)

module.exports = router;