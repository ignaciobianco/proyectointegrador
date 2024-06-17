module.exports = function (sequelize, dataTypes) {

    let alias = 'Producto'


    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        imagen_producto: {
            type: dataTypes.STRING(500),
        },
        nombre_producto: {
            type: dataTypes.STRING(500), 
        },
        descripcion_producto: {
            type: dataTypes.STRING,
        },
        
        }
    




    let config = {

        tablename: 'Producto',
        timestamps: false,
        underscored: true,

    }



    let Producto = sequelize.define(alias, cols, config)

    return Producto
}
