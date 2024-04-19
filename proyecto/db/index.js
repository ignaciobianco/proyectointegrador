
const datos = {
  usuario: {
    email: "bpeleritti@gmail.com",
    usuario: "bpeleritti",
    contraseña: "orlando",
    fecha_nacimiento: "2023-11-10",
    dni: "46789024",
    foto_perfil: "/images/users/profile.png"
  },
  productos: [
    {
      imagen: "/images/products/e61d09233c8e1a8031977f3f874bfc0b.jpg",
      nombre: "Silla",
      descripcion: "silla de comedor",
      comentarios: [{

        textocomentario: 'Este producto superó mis expectativas',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      },
      {
        textocomentario: 'Excelente calidad y precio',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      },
      {
        textocomentario: 'Totalmente satisfecho con mi compra',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      }]
    },
    {
      imagen: "mesa.jpg",
      nombre: "Mesa",
      descripcion: "Mesa de comedor",
      comentarios: [{

        textocomentario: 'Increíble producto, lo recomiendo',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      },
      {
        textocomentario: 'Me encanta este producto, es genial',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      },
      {
        textocomentario: 'Producto excelente, volvería a comprarlo.',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      }]
    },
    {
      imagen: "Luz.jpg",
      nombre: "Luz de noche",
      descripcion: "Luz ideal para el costado de la cama",
      comentarios: [{

        textocomentario: 'Cumple con todas mis expectativas.',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      },
      {
        textocomentario: 'Maravilloso producto, muy contento con mi compra.',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      },
      {
        textocomentario: 'Fantástica experiencia, este producto es increíble. ',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      }],
    },
    {
      imagen: "cama.jpg",
      nombre: "Cama",
      descripcion: "Cama king size",
      comentarios: [{

        textocomentario: '¡Qué gran producto! Me encanta',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      },
      {
        textocomentario: 'Es justo lo que necesitaba, excelente.',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      },
      {
        textocomentario: 'No puedo estar más feliz con este producto.',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      }]
    },
    {
      imagen: "puf.jpg",
      nombre: "Puf",
      descripcion: "puf para dormir",
      comentarios: [{

        textocomentario: 'La mejor compra que he hecho en mucho tiempo. ',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      },
      {
        textocomentario: 'Producto de alta calidad, muy impresionado',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      },
      {
        textocomentario: 'Simplemente perfecto, no cambiaría nada.',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      }],
    },
    {
      imagen: "ropero.jpg",
      nombre: "Ropero",
      descripcion: "Ropero para prendas",
      comentarios: [{

        textocomentario: 'Recomiendo este producto a todos mis amigos.        ',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      },
      {
        textocomentario: 'Superó todas mis expectativas, ¡increíble!',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      },
      {
        textocomentario: 'Este producto hizo mi vida mucho más fácil.',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      }],
    },
    {
      imagen: "banqueta.jpg",
      nombre: "Banqueta",
      descripcion: "banqueta de bar",
      comentarios: [{

        textocomentario: 'No puedo creer lo bueno que es este producto.',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      },
      {
        textocomentario: 'Definitivamente vale la pena cada centavo        ',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      },
      {
        textocomentario: 'Me encanta la calidad y el rendimiento de este producto',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      }],
    },
    {
      imagen: "sillon.jpg",
      nombre: "Sillon",
      descripcion: "sillon grand para 6 personas",
      comentarios: [{

        textocomentario: 'Nunca me cansaré de recomendar este producto',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      },
      {
        textocomentario: 'Cada hogar debería tener uno de estos productos',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      },
      {
        textocomentario: 'Realmente estoy impresionado con este producto',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      }],
    },
    {
      imagen: "Biblioteca.jpg",
      nombre: "Biblioteca",
      descripcion: "biblioteca entran 100 libros",
      comentarios: [{

        textocomentario: '¡Tan bueno que quiero comprar otro!',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      },
      {
        textocomentario: 'Este producto es justo lo que estaba buscando',
        nombre_usuario: 'bpeleritti',
        imagen_perfil: 'bpeleritti.jpg',
      },
      {
        textocomentario: 'Nunca pensé que encontraría un producto tan bueno',
        nombre_usuario: 'jfernandez',
        imagen_perfil: 'jfernandez.jpg',
      }],
    },
    {
      imagen: "colchon.jpg",
      nombre: "Colchones",
      descripcion: "colchon queen size",
      comentarios: [{

        textocomentario: 'Hace todo lo que necesito y más',
        nombre_usuario: 'mmagarinos',
        imagen_perfil: 'mmagarinos.jpg',
      },
      {
        textocomentario: 'Simplemente no hay palabras para describir lo bueno que es este producto',
        nombre_usuario: 'mvalentino',
        imagen_perfil: 'mvalentino.jpg',
      },
      {
        textocomentario: 'Muy Bueno',
        nombre_usuario: 'ibianco',
        imagen_perfil: 'ibianco.jpg',
      }],
    }
  ]
};

module.exports = datos;
