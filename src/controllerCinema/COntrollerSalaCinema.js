import { PintarSillasSala } from '../Helper/PintarSillas.js';
let acientos = [
    [
        { id: "a1", estado: 0 },
        { id: "b1", estado: 0 },
        { id: "c1", estado: 0 },
        { id: "d1", estado: 0 }
    ],
    [
        { id: "a2", estado: 0 },
        { id: "b2", estado: 0 },
        { id: "c2", estado: 0 },
        { id: "d2", estado: 0 }
    ],
    [
        { id: "a3", estado: 0 },
        { id: "b3", estado: 0 },
        { id: "c3", estado: 0 },
        { id: "d3", estado: 0 }
    ]
]
// Pintar la sala de cine:
let SalaCine = document.getElementById("SalaCinema");
let IdReservar = document.getElementById("IdReservar");
const buttonCancelar = document.querySelector("#cancelar")
const textValuetopay = document.querySelector("#IdCuentaFactura")
const sillas = document.querySelector("#IdNumsClciks");
PintarSillasSala(acientos, SalaCine);



let sillasRojoCompradas = [];
var sillasCompradas = 0;
SalaCine.addEventListener('click', (evento) => {
    const vaaueMovie = 10000;
    if (evento.target.tagName == "IMG") {
        let idElementoSeleccionado = evento.target.id
        acientos.forEach((Hilera) => {
            Hilera.forEach((aciento) => {
                if (aciento.id == idElementoSeleccionado) {
                    if (aciento.estado == 0) {
                        aciento.estado = 1;
                        evento.target.src = "../../assets/img/cinema-chair-Green.png";
                        sillasCompradas++;
                        sillas.value = sillasCompradas;
                    } else if (aciento.estado == 1) {
                        aciento.estado = 0; 
                        if (sillasCompradas >= 0) 
                        evento.target.src = "../../assets/img/cinema-chair.png";
                        sillasCompradas--;
                        sillas.value = sillasCompradas;
                    }
                }
            })
        })
    }
    let totalToPay = vaaueMovie * sillasCompradas;
    textValuetopay.value = totalToPay
})

IdReservar.addEventListener('click', () => {
    let i=0
    SalaCine.innerHTML = " ";
    acientos.forEach((Hilera) => {
        Hilera.forEach((aciento) => {
            if (aciento.estado == 1) {
                i += 1
                sillasCompradas++;  
                aciento.estado = 2;
            }
        })
    })
    localStorage.setItem(`asientos${nombrePelicula}`, JSON.stringify(asientos));
    sillas.value = 0;
    textValuetopay.value = 0;
    sillasCompradas = 0;
    PintarSillasSala(acientos, SalaCine);
})


 