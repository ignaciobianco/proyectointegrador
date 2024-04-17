const productController = {
    productos: function (req, res) {

        return res.render('product', {
        })
    },
    addProduct: function (req, res) {

        return res.render('product-add', {
        })


    },
    resultadosBusqueda: function (req, res) {
        return res.render('search-results', {})
    }

};

module.exports = productController