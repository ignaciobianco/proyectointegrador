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
        timestamps: true,
        underscored: true,

    }



    let Comentario = sequelize.define(alias, cols, config)


    Comentario.associate = function(models){
    
    Comentario.belongsTo(models.Usuario, {
    
    as : 'usuario',
    foreignKey : 'id_usuario'
    
    
    })
    
    
    
       /* db.Producto.findAll({
            include: [
                { association: 'Usuario' },
                { association: 'Comentario' }
        
            ]
        })*/
    
    }

    Comentario.associate = function(models){

        Comentario.belongsTo(models.Producto, {
        
        as : 'producto',
        foreignKey : 'id_producto'
        
        
        })}
    


    
    return Comentario
}
