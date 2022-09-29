export function PintarPeliculas(peliculas){
    let fila = document.getElementById("filas");
        peliculas.forEach(pelicula => {
        //----------------------------------------------------.creamos una columna para casa pelicula
        let columna = document.createElement("div");
        columna.classList.add("col");
        //-------------------------------------------------------creamos una card para cada pelicula
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card","h-100");
        // ------------------------------------------------------ creamos un img  para cada pelicula
        let poster = document.createElement("img"); 
        poster.classList.add("card-img-top");
        poster.src = pelicula.imagen
        // ----------------------------------------------------- creamos  un h1 para el nombre de la pelicula
        let nombre = document.createElement("h3");
        nombre.classList.add("card-title","text-center");
        nombre.textContent = pelicula.nombre
        // ----------------------------------------------------  creamos un parrafo para el genero de cada pelicula 
        let genero = document.createElement("p");
        genero.classList.add("text-start");
        genero.textContent = "Genero: "+ pelicula.genero
        //------------------------------------------------------- creamos un h7 para el idioma de cada pelicula 
        let idioma = document.createElement("h4");
        idioma.classList.add("fw-bold");
        idioma.textContent = "Idioma: "+ pelicula.idioma
        // ------------------------------------------------------- creamos un parrafo para la sipnosis
        let sipnosis = document.createElement("h2");
        sipnosis.textContent = pelicula.sinopsis
        //----------------------------------------------------------------------clasificacion
        let clasificaccion = document.createElement("h6");
        clasificaccion.classList.add("fw-bold");
        clasificaccion.textContent = "Clasificacion: "+ pelicula.clasificaccion
        //-------------------------------------------------------------------director
        let director = document.createElement("h5");
        director.classList.add("fw-bold");
        director.textContent = "Director: "+ pelicula.director
        //-------------------------------------------------------------------director
        let actores = document.createElement("h1");
        actores.classList.add("fw-bold");
        actores.textContent = "Actores: "+ pelicula.actores
        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(sipnosis);
        tarjeta.appendChild(clasificaccion);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);        
});
  
  
  
}
export function PintarPeliculasnew(Proxpeliculas){
    let Row = document.getElementById("newRows");
    Proxpeliculas.forEach(newMovie => {
        //----------------------------------------------------.creamos una columna para casa pelicula
        let columna = document.createElement("div");
        columna.classList.add("col");
      //-------------------------------------------------------creamos una card para cada pelicula
       let tarjeta = document.createElement("div");
       tarjeta.classList.add("card","h-100");
      // ------------------------------------------------------ creamos un img  para cada pelicula
       let poster = document.createElement("img"); 
       poster.classList.add("card-img-top");
       poster.src = newMovie.imagen
       // ----------------------------------------------------- creamos  un h1 para el nombre de la pelicula
       let nombre = document.createElement("h3");
       nombre.classList.add("card-title","text-center");
       nombre.textContent = newMovie.nombre
        // ----------------------------------------------------  creamos un parrafo para el genero de cada pelicula 
        let genero = document.createElement("p");
        genero.classList.add("text-start");
        genero.textContent = "Genero: "+ newMovie.genero
        //------------------------------------------------------- creamos un h7 para el idioma de cada pelicula 
        let idioma = document.createElement("h6");
        idioma.classList.add("fw-bold");
        idioma.textContent = "Idioma: "+ newMovie.idioma
        // ------------------------------------------------------- creamos un parrafo para la sipnosis
        let sipnosis = document.createElement("h1");
        sipnosis.textContent = newMovie.sinopsis
        //----------------------------------------------------------------------clasificacion
        let clasificaccion = document.createElement("h5");
        clasificaccion.classList.add("fw-bold");
        clasificaccion.textContent = "Clasificacion: "+ newMovie.clasificaccion
        //-------------------------------------------------------------------director
        let director = document.createElement("h2");
        director.classList.add("fw-bold");
        director.textContent = "Director: "+ newMovie.director
       //-------------------------------------------------------------------director
        let actores = document.createElement("h4");
        actores.classList.add("fw-bold");
        actores.textContent = "Actores: "+ newMovie.actores
        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(sipnosis);
        tarjeta.appendChild(clasificaccion);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores);
        columna.appendChild(tarjeta);
        Row.appendChild(columna);        
      });

}
