use netflix
db.createCollection('peliculas');
db.createCollection('categorias');
db.createCollection('usuarios');
db.peliculas.insertMany([{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Finding Nemo", "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?", "caratula" : "img/3.jpg", "categoria" : { "_id" : ObjectId("5ca3814381a123ccbd73abfc"), "nombre" : "Comedia" }, "calificacion" : 5, "original" : true },
{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Love Rosie", "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?", "caratula" : "img/4.jpg", "categoria" : { "_id" : ObjectId("5ca3813181a123ccbd73abfb"), "nombre" : "Romance" }, "calificacion" : 5, "original" : true },
{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Avengers Endgame", "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?", "caratula" : "img/5.jpg", "categoria" : { "_id" : ObjectId("5ca3813181a123ccbd73abfb"), "nombre" : "Romance" }, "calificacion" : 2, "original" : true },
{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Bohemian Rhapsody", "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?", "caratula" : "img/6.jpg", "categoria" : { "_id" : ObjectId("5ca3810c81a123ccbd73abfa"), "nombre" : "Accion" }, "calificacion" : 5, "original" : true },
{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Harry Potter y los Padrinos Mágicos", "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?", "caratula" : "img/7.jpg", "categoria" : { "_id" : ObjectId("5ca3814381a123ccbd73abfc"), "nombre" : "Comedia" }, "calificacion" : 2, "original" : true },
{ "imagenes" : [ "img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg" ], "nombre" : "Narcos Honduras", "descripcion" : "Cualquier cosa", "caratula" : "img/2.jpg", "categoria" : { "_id" : "5ca3810c81a123ccbd73abfa", "nombre" : "Accion" }, "calificacion" : 1, "original" : false }]);


db.categorias.insertMany([{ "_id" : ObjectId("5ca3810c81a123ccbd73abfa"), "nombre" : "Accion", "orden" : 1, "descripcion" : "Lorem Ipsum" },
{ "_id" : ObjectId("5ca3813181a123ccbd73abfb"), "nombre" : "Romance", "orden" : 2, "descripcion" : "Lorem Ipsum" },
{ "_id" : ObjectId("5ca3814381a123ccbd73abfc"), "nombre" : "Comedia", "orden" : 3, "descripcion" : "Lorem Ipsum" }]);

db.categorias.insertMany([{ "nombre" : "Pedro", "apellido" : "Martinez", "usuario" : "pmartinez", "correo" : "pmartinez@gmail.com", "contrasena" : "asd.456", "tipoUsuario" : "Cajero" },
{ "nombre" : "Juan", "apellido" : "Perez", "usuario" : "jperez", "correo" : "jperez@gmail.com", "contrasena" : "asd.456", "tipoUsuario" : "Administrador" }]);