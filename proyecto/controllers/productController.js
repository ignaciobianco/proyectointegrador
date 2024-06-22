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

            include: [{
                association: 'usuario' 
            }, {
                association: 'comentarios' , include: [{ association: 'usuario'}]
            }]
                
        })
        .then(function(productos){
            
            return res.render('product', { 
                
                producto: productos,
                comentarios: productos.comentarios
            });
        }
        )

    //     const primerProducto = db.productos[0]; // Obtener el primer producto
    //     const comentarios = [ // Extraer los primeros tres comentarios
    //         primerProducto.comentarios[0],
    //         primerProducto.comentarios[1],
    //         primerProducto.comentarios[2],
    //     ];

    //     return res.render('product', {
    //         producto: primerProducto,
    //         comentarios,
    //     })

     },





    addProduct: function (req, res) {

         const usuario = db.usuario;
        return res.render('product-add', {
            perfil: usuario
        })

        


        
    },

    agregarProducto: function(req, res) {

        let errors = validationResult(req);
        let form = req.body

        if (errors.isEmpty()) {
            let newProduct = {
                imagen: form.imagen,
                nombre: form.nombre,
                descripcion: form.descripcion,
            }

            db.Producto.create(newProduct);

            return res.redirect('/')
        } 
        else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body })
        }






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


};

module.exports = productController