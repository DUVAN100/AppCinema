import {PintarSillasSala } from '../Helper/PintarSillas.js';
let acientos = [
    [
        {id:"a1", estado:2},
        {id:"b2", estado:0},
        {id:"c1", estado:0},
        {id:"d1", estado:0}
    ],
    [   
        {id:"a2", estado:2},
        {id:"b2", estado:0},
        {id:"c2", estado:0},
        {id:"d2", estado:0}
    ],
    [
        {id:"a3", estado:0},
        {id:"b3", estado:0},
        {id:"c3", estado:0},
        {id:"d3", estado:0}
    ]    
]
 // Pintar la sala de cine:
 let SalaCine = document.getElementById("SalaCinema");
 PintarSillasSala(acientos, SalaCine); 

 //event click in sala cine
 SalaCine.addEventListener('click', function(evento){
    if(evento.target.tagName =="IMG"){
        let idElementoSeleccionado = evento.target.id
        acientos.forEach( function(Hilera){
            Hilera.forEach(function(aciento){
                if(aciento.id == idElementoSeleccionado){
                    if(aciento.estado == 0){
                        aciento.estado = 1;
                        event.target.src= "../../assets/img/cinema-chair-Green.png"
                    }else if(aciento.estado == 1){
                        aciento.estado=0;
                        event.target.src="../../assets/img/cinema-chair.png"
                    }
                }
            })
        })
    }
 })