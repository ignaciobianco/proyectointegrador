CREATE TABLE usuarios (
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(50),
contraseña varchar(50),
fecha DATE NOT NULL,
dni int,
foto_perfil text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE productos (
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT unsigned,
imagen_producto varchar(500),
nombre_producto varchar(500),
descripcion_producto text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);

CREATE TABLE comentarios (
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT unsigned,
id_usuario Int unsigned, 
texto_comentario TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
SELECT * FROM proyint.usuarios;

INSERT INTO usuarios
VALUES (DEFAULT, 'bpeleritti@gmail.com' , 'orlando', '2023-11-10' , 46789024 , 'bpeleritti.jpg', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'jfernandez@gmail.com' , 'juanelmascapo', '2023-11-10' , 46789024 , 'bpeleritti.jpg', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'mmagarinos@gmail.com' , 'hola123', '2023-11-10' , 46789024 , 'bpeleritti.jpg', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'mvalentino@gmail.com' , 'chau123', '2023-11-10' , 46789024 , 'bpeleritti.jpg', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'ibianco@gmail.com' , 'viloni', '2023-11-10' , 46789024 , 'bpeleritti.jpg', now(), now(), now());

SELECT * FROM proyint.productos;
INSERT INTO productos
VALUES (DEFAULT, 3 , 'silla.jpg', 'Silla' , 'silla de comedor' , now(), now(), now()) ;
INSERT INTO productos
VALUES (DEFAULT, 3 , 'mesa.jpg', 'Mesa' , 'Mesa de comedor' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 2 , 'Luz.jpg', 'Luz de noche' , 'Luz ideal para el costado de la cama' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 2 , 'cama.jpg', 'Cama' , 'Cama king size' , now(), now(), now()) ;
INSERT INTO productos
VALUES (DEFAULT, 1 , 'ropero.jpg', 'Ropero' , 'Ropero para prendas' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 1 , 'banqueta.jpg', 'Banqueta' , 'banqueta de bar' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 4 , 'sillon.jpg', 'Sillon' , 'sillon grand para 6 personas' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 4 , 'puf.jpg', 'Puf' , 'puf para dormir' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 5 , 'Biblioteca.jpg', 'Biblioteca' , 'biblioteca entran 100 libros' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 5 , 'colchon.jpg', 'Colchones' , 'colchon queen size' , now(), now(), now());

SELECT * FROM proyint.comentarios;
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Este producto superó mis expectativas.' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Excelente calidad y precio.}
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Totalmente satisfecho con mi compra.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Increíble producto, lo recomiendo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Me encanta este producto, es genial.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Producto excelente, volvería a comprarlo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Cumple con todas mis expectativas.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Maravilloso producto, muy contento con mi compra.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Fantástica experiencia, este producto es increíble.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , '¡Qué gran producto! Me encanta.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'Es justo lo que necesitaba, excelente.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'No puedo estar más feliz con este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'La mejor compra que he hecho en mucho tiempo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'Producto de alta calidad, muy impresionado.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'Simplemente perfecto, no cambiaría nada.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Recomiendo este producto a todos mis amigos.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Superó todas mis expectativas, ¡increíble!
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Este producto hizo mi vida mucho más fácil.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'No puedo creer lo bueno que es este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'Definitivamente vale la pena cada centavo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'Me encanta la calidad y el rendimiento de este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Nunca me cansaré de recomendar este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Cada hogar debería tener uno de estos productos.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Realmente estoy impresionado con este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , '¡Tan bueno que quiero comprar otro!
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , 'Este producto es justo lo que estaba buscando.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , 'Nunca pensé que encontraría un producto tan bueno.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Hace todo lo que necesito y más.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Simplemente no hay palabras para describir lo bueno que es este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Muy Bueno' ,  default, default, default);





