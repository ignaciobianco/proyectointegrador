
const datos = {
    usuario: {
      email: "bpeleritti@gmail.com",
      usuario: "bpeleritti",
      contraseña: "orlando",
      fecha_nacimiento: "2023-11-10",
      dni: "46789024",
      foto_perfil: "images/users/default-image.png"
    },
    productos: [
      {
        id: 1,
        imagen_producto: "/img/producto1.jpg",
        nombre_producto: "Producto 1",
        descripcion_producto: "Descripción del Producto 1",
        comentarios: [
          {
            usuario: "ejemplo",
            texto_comentario: "Comentario de ejemplo",
            imagen_perfil: "/img/perfil.jpg"
          }
        ]
      },
      // Aquí se agregan más productos...
    ]
  };
  
  module.exports = datos;
  