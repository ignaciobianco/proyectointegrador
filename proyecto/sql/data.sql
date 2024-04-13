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
VALUES (DEFAULT, 1 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 1 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 2 , 1 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 3 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 4 , 2 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 5 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 6 , 3 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 7 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 8 , 4 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 9 , 5 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Muy Bueno' ,  default, default, default);
INSERT INTO comentarios
VALUES (DEFAULT, 10 , 5 , 'Muy Bueno' ,  default, default, default);


