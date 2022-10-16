// consumir datos del spotify

// uri=url+ep

const URI="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us"

// 2 token
const TOKEN="Bearer BQAMAMTvRWw12lkVV4lVoP2Na6HkKDC2Gy4lRoxeamNS_mA6f2DbzyOo4i7UEmZkO6BPSxBCWG4Ec-GQ0L-FiIgLc-RfLI00AXWnF1xK0NixSIZNqxutHF2pCB94g8PJ80_QKGy0ABNoNC0VSrx2ZhJrezcv8lAgvb__3VKq6JBd-c-OK2jLHAeDfVVEs0hwKVk"

// 3 PETICION
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}
//04 usamos la promesa fetch para consumir el api

let fila =document.getElementById("Fila")
fetch(URI,PETICION)
.then(function (respuesta) {
    return respuesta.json()
})
.then (function (respuesta) {
  let canciones=(respuesta.tracks)

     canciones.forEach(function(cancion){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
        let audio=document.createElement("audio")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url;
        let nombre=document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
     })    
})
.catch(function(error) {
    console.log(error)
})