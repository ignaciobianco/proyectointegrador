const db = require('../db/index');
const indexController = {
    index: function (req, res) {
        const listaproductos = db.productos
        return res.render('index', {
        index : listaproductos
        })
    }
}

module.exports = indexController