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
    
    headerlogueado: function (req, res) {
        const datos = db.usuario;
        return res.render('headerlogueado',{

            perfil: datos })
    }
    
    
    

};

module.exports = productController