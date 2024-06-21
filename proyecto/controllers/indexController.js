const db = require('../database/models');
const indexController = {
    index: function (req, res) {

        db.Producto.findAll({
            order:[
                ['createdAt','DESC']
            ],
            include: [{

association: 'usuario'
    }
]

        })
        .then(function (productos) {
            const listaproductos = productos

            return res.render('index' ,  {listaproductos:listaproductos})

            
        })
    }
}

module.exports = indexController