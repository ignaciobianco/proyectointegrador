module.exports = function (sequelize, dataTypes) {

    let alias = 'Usuario'


    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        contraseña: {
            type: dataTypes.STRING(50),
        },
        email: {
            type: dataTypes.STRING(50),
        },
        fecha: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        foto_perfil: {
            type: dataTypes.STRING,
        }
    }




    let config = {

        tablename: 'usuarios',
        timestamps: false,
        underscored: true,

    }



    let Usuario = sequelize.define(alias, cols, config)


    Usuario.associate = function(models){

        Usuario.hasMany(models.Producto, {
        
        as : 'producto',
        foreignKey : 'id_usuario'
        
        
        })
        
        
        
          /*  db.Producto.findAll({
                include: [
                    { association: 'Usuario' },
                    { association: 'Comentario' }
            
                ]
            })*/
        
        }

        Usuario.associate = function(models){

            Usuario.hasMany(models.Comentario, {
            
            as : 'comentario',
            foreignKey : 'id_usuario'
            
            
            })}    


    return Usuario
}
