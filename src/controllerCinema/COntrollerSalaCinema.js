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
var sillasCompradas = 0;

//event click in sala cine
SalaCine.addEventListener('click', (evento) => {
    const vaaueMovie = 10000;
    if (evento.target.tagName == "IMG") {
        let idElementoSeleccionado = evento.target.id
        acientos.forEach((Hilera) => {
            Hilera.forEach((aciento) => {
                if (aciento.id == idElementoSeleccionado) {
                    if (aciento.estado == 0) {
                        sillasCompradas++;
                        aciento.estado = 1;
                        event.target.src = "../../assets/img/cinema-chair-Green.png"
                        sillas.value = sillasCompradas
                        localStorage
                    } else if (aciento.estado == 1) {
                        aciento.estado = 0;
                        if (sillasCompradas >= 0) sillasCompradas--;
                        event.target.src = "../../assets/img/cinema-chair.png"
                        sillas.value = sillasCompradas
                    }
                }
            })
        })
    }
    let totalToPay = vaaueMovie * sillasCompradas;
    textValuetopay.value = totalToPay
})
IdReservar.addEventListener('click', () => {
    
    SalaCine.innerHTML = " ";
    
    acientos.forEach((Hilera) => {
        Hilera.forEach((aciento) => {
            if (aciento.estado == 1) {
                sillasCompradas++;  
                aciento.estado = 2;
            }
        })
    })
    sillas.value = 0;
    textValuetopay.value = 0;
    sillasCompradas = 0;
    PintarSillasSala(acientos, SalaCine);
})
 
buttonCancelar.addEventListener("click", ()=> {
    SalaCine.innerHTML = " ";
    acientos.forEach((Hilera) => {
        Hilera.forEach((aciento) => {
            if (aciento.estado == 1) {
                aciento.estado = 0;
            }
        })
    })
    sillas.value = 0;
    textValuetopay.value = 0;
    PintarSillasSala(acientos, SalaCine)
    sillasCompradas = 0;
})

