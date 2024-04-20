const db = require('../db/index');
const productController = {
    productos: function (req, res) {
        const productos = db.productos
        return res.render('product', {
            comment: productos

        })
    },
    addProduct: function (req, res) {

        return res.render('product-add', {
        })


    },
    resultadosBusqueda: function (req, res) {
        return res.render('search-results', {})
    },
    

    

};

module.exports = productController