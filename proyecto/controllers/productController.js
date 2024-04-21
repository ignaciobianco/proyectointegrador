const db = require('../db/index');
const { headerlogueado } = require('./userController');
const productController = {
    productos: function (req, res) {
        const primerProducto = db.productos[0]; // Obtener el primer producto
        const comentarios = [ // Extraer los primeros tres comentarios
            primerProducto.comentarios[0],
            primerProducto.comentarios[1],
            primerProducto.comentarios[2],
        ];

        return res.render('product', {
            producto: primerProducto,
            comentarios,
        })
    },
    addProduct: function (req, res) {

        const usuario = db.usuario;
        return res.render('product-add', {
        perfil: usuario
        })},

    

    
    resultadosBusqueda: function (req, res) {
        return res.render('search-results', {})
    },
    
    
    };

module.exports = productController