CREATE DATABASE proyint;
USE proyint;


CREATE TABLE usuarios (
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(50),
contraseña varchar(500),
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
VALUES (DEFAULT, 'bpeleritti@gmail.com' , 'orlando', '2023-11-10' , 46789024 , 'bpeleritti.png', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'jfernandez@gmail.com' , 'juanelmascapo', '2023-11-10' , 46789024 , 'jfernandez.png', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'mmagarinos@gmail.com' , 'hola123', '2023-11-10' , 46789024 , 'mmagarinos.png', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'mvalentino@gmail.com' , 'chau123', '2023-11-10' , 46789024 , 'mvalentino.png', now(), now(), now());
INSERT INTO usuarios
VALUES (DEFAULT, 'ibianco@gmail.com' , 'viloni', '2023-11-10' , 46789024 , 'ibianco.png', now(), now(), now());

SELECT * FROM proyint.productos;
INSERT INTO productos
VALUES (DEFAULT, 3 , 'e61d09233c8e1a8031977f3f874bfc0b.jpg', 'Silla' , 'silla de comedor' , now(), now(), now()) ;
INSERT INTO productos
VALUES (DEFAULT, 3 , '52a46f35e9205db41ab5152ada9bbdc6.jpg', 'Mesa' , 'Mesa de comedor' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 2 , 'ed5ae5474172d557f51a204a6fb3d38d.jpg', 'Luz de noche' , 'Luz ideal para el costado de la cama' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 2 , 'castlery-joseph-king-bed-for-small-bedroom-with-fabric-headboard-and-timber-frame.jpeg', 'Cama' , 'Cama king size' , now(), now(), now()) ;
INSERT INTO productos
VALUES (DEFAULT, 1 , '5e73686ed2e8e67afdc9c11f3d548909.jpg', 'Ropero' , 'Ropero para prendas' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 1 , 'a06360657a430f6d24c87a0d856718de.jpg', 'Banqueta' , 'banqueta de bar' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 4 , '33e80b6ee6c4d4939cc8c0ab48505d2c.jpg', 'Sillon' , 'sillon grand para 6 personas' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 4 , '03c29b8335f8bab0610a7907004d0243.jpg', 'Puf' , 'puf para dormir' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 5 , 'biblioteca.png', 'Biblioteca' , 'biblioteca entran 100 libros' , now(), now(), now());
INSERT INTO productos
VALUES (DEFAULT, 5 , 'colchon.png', 'Colchones' , 'colchon queen size' , now(), now(), now());

SELECT * FROM proyint.comentarios;
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Este producto superó mis expectativas.' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 2 , 'Excelente calidad y precio.}
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 3 , 'Totalmente satisfecho con mi compra.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 4 , 'Increíble producto, lo recomiendo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 5 , 'Me encanta este producto, es genial.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Producto excelente, volvería a comprarlo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Cumple con todas mis expectativas.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 3 , 'Maravilloso producto, muy contento con mi compra.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 4 , 'Fantástica experiencia, este producto es increíble.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 5 , '¡Qué gran producto! Me encanta.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 1 , 'Es justo lo que necesitaba, excelente.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'No puedo estar más feliz con este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'La mejor compra que he hecho en mucho tiempo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 4 , 'Producto de alta calidad, muy impresionado.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 5 , 'Simplemente perfecto, no cambiaría nada.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 1 , 'Recomiendo este producto a todos mis amigos.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 2 , 'Superó todas mis expectativas, ¡increíble!
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Este producto hizo mi vida mucho más fácil.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'No puedo creer lo bueno que es este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 5 , 'Definitivamente vale la pena cada centavo.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 1 , 'Me encanta la calidad y el rendimiento de este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 2 , 'Nunca me cansaré de recomendar este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 3 , 'Cada hogar debería tener uno de estos productos.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Realmente estoy impresionado con este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , '¡Tan bueno que quiero comprar otro!
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 1 , 'Este producto es justo lo que estaba buscando.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 2 , 'Nunca pensé que encontraría un producto tan bueno.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 3 , 'Hace todo lo que necesito y más.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 4 , 'Simplemente no hay palabras para describir lo bueno que es este producto.
' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Muy Bueno' ,  default, default, default);





