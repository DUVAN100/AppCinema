
import{Proxpeliculas} from '../baseDeDatosNew/baseDeDatosNew.js'
import {peliculas} from '../Helper/baseDeDatos.js'
import {PintarPeliculas, PintarPeliculasnew} from '../Helper/PintarPeliculas.js';
PintarPeliculas(peliculas);
PintarPeliculasnew(Proxpeliculas);
let peliculaSeleccionada = {

}

let fila = document.getElementById("filas");

fila.addEventListener('click', function(event){
    console.log(event.target.parentElement)
    peliculaSeleccionada.poster=(event.target.parentElement.querySelector("img").src);
    peliculaSeleccionada.titulo=(event.target.parentElement.querySelector("h3").textContent);
    peliculaSeleccionada.genero=(event.target.parentElement.querySelector("p").textContent);
    peliculaSeleccionada.idioma=(event.target.parentElement.querySelector("h4").textContent);
    peliculaSeleccionada.sinopsis=(event.target.parentElement.querySelector("h2").textContent);
    peliculaSeleccionada.clasificaccion=(event.target.parentElement.querySelector("h6").textContent);
    peliculaSeleccionada.director=(event.target.parentElement.querySelector("h5").textContent);
    peliculaSeleccionada.actores=(event.target.parentElement.querySelector("h1").textContent);
       //llamando a la memoria del navegador

       localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))
           //rederirecciona a otra vista
    window.location.href="./src/views/ampliarInfoPelicula.html"
})