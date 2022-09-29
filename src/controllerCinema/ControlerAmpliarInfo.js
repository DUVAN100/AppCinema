//PREGUNTANDO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA
let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))
console.log(datosPeliculaSeleccionada)
console.log(datosPeliculaSeleccionada);
let titulo = datosPeliculaSeleccionada.titulo;
let genero = datosPeliculaSeleccionada.genero;
let idioma = datosPeliculaSeleccionada.idioma;
let sinopsis = datosPeliculaSeleccionada.sinopsis;
let poster = datosPeliculaSeleccionada.poster;
let director = datosPeliculaSeleccionada.director;
let clasificacion = datosPeliculaSeleccionada.clasificacion;
let actores = datosPeliculaSeleccionada.actorres;
//------------------------------------------------------------------------------Add Atributes
let psoterP = document.getElementById('Poster');
psoterP.src= poster;
let tituloP = document.getElementById("Titulo");
tituloP.textContent = titulo;
let generoP = document.getElementById("Genero");
generoP.textContent = genero;
let idiomaP = document.getElementById("Idioma");
idiomaP.textContent = idioma;
let sinopsisP = document.getElementById("Sinopsis");
sinopsisP.textContent = sinopsis;
let directorP = document.getElementById("Director");
directorP.textContent = director;
let actoresP = document.getElementById("Actores");
actoresP.textContent = actores;



