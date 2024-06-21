module.exports = function (sequelize, dataTypes) {

    let alias = 'Comentario'


    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        texto_comentario: {
            type: dataTypes.TEXT,
        },
       
    }




    let config = {

        tablename: 'comentarios',
        timestamps: false,
        underscored: true,

    }



    let Comentario = sequelize.define(alias, cols, config)


    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'id_producto'
        });
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        });
    
    }

    


    
    return Comentario
}
