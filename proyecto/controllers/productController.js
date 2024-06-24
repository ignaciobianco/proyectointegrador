const { where, Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op
const { headerlogueado } = require('./userController');
const { validationResult } = require("express-validator");
const cookieParser = require('cookie-parser');
const session = require('express-session');



const productController = {
    productos: function (req, res) {

        productId = req.params.id

        db.Producto.findByPk(productId, {
            order:[
                ['createdAt','DESC']
            ],
            include: [{
                association: 'usuario'
            }, {
                association: 'comentarios', include: [{ association: 'usuario' }]
            }]

        })
            .then(function (productos) {

                return res.render('product', {

                    producto: productos
                    
                });
            }
            )


    },





    addProduct: function (req, res) {
        const usuario = db.usuario;
        return res.render('product-add',{
            perfil: usuario
        })
    },

    agregarProducto: function(req, res) {
        

        let errors = validationResult(req);
        let form = req.body;
        let id = req.params.id

        if (errors.isEmpty()) {
            let newProduct = {
                imagen_producto: form.imagen,
                nombre_producto: form.nombre,
                descripcion_producto: form.descripcion,
                id_usuario: id, 
                createdAt: new Date() 
            };

            db.Producto.create(newProduct)
            .then(() => {
                return res.redirect('/');
            });
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body });
        }
    },

    agregarComentario: function (req, res) {
        let errors = validationResult(req);
        let id = req.params.id
        if (errors.isEmpty()) {
            db.Producto.findByPk(req.params.id,  {include: [{
                association: 'usuario'
            }, {
                association: 'comentarios',
                include: [{ association: 'usuario' }],
                order: [['createdAt', 'DESC']]
            }] })
            db.Comentario.create({
                texto_comentario: req.body.comentario,
                id_producto: req.params.id,
                id_usuario: (req.session.UserId || req.cookies.RecordarmeID || req.session.IdUsuario),
                createdAt: new Date()
            })
            .then(function (producto) {
                return res.redirect('/product/' + id)
            });
        } else {
           return res.render('product', {
                producto: producto,
                errors: errors.mapped()
            })

        }},



    editProduct: function(req, res) {


        let id = req.params.id;
        // return res.send(id)
        db.Producto.findByPk(id, {
            include: [{ association: 'usuario' }]
        })
            .then(function (result) {
                // return res.send(result)
                res.render("product-edit", { productoEdit: result })
            })


    },
    update: function (req, res) {
        let id = req.params.id;
        form = req.body
        console.log('Datos del formulario:', form);

        let datosActualizados = {

            nombre_producto: form.nombre_producto,
            descripcion_producto: form.descripcion_producto,
            imagen_producto: form.imagen_producto

        };

        // return res.send(id)
        db.Producto.update(datosActualizados, { where: [{ id: id }] })
            .then(function (result) {
                console.log('Resultado de la actualización:', result);
                return res.redirect('/product/' + id)


            }).catch(function (error) {
                console.log(error);
            })






    },


    resultadosBusqueda: function (req, res) {
        let Buscar = req.query.search
        db.Producto.findAll({
            where: {
                [op.or]: [

                    { nombre_producto: { [op.like]: `%${Buscar}%` } },
                    { descripcion_producto: { [op.like]: `%${Buscar}%` } }

                ]
            }
        })

            .then(productosEncontrados => {
                res.render('search-results', {
                    productos: productosEncontrados,
                    query: Buscar

                });
            })

    },

    del: function (req, res) {
    const id = Number(req.params.id);
    db.Producto.findByPk(id)
    .then(producto => {
        return db.Producto.destroy({ where: { id: id } });
    })
    .then(function(){
    res.redirect('/'); // Redirigimos a la página principal después de eliminar el producto
})
}
};

module.exports = productController