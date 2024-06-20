const db = require('../database/models');
const indexController = {
    index: function (req, res) {

        db.Producto.findAll({
            order:[
                ['createdAt','DESC']
            ]
        })
        .then(function (productos) {
            const listaproductos = productos

            return res.render('index', {listaproductos:listaproductosgit}

            )
        })
    }
}

module.exports = indexController