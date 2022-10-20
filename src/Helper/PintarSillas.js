export function PintarSillasSala(acientos, SalaCine, nombrePelicula) {
    const data2 = JSON.parse(localStorage.getItem(`asientos${nombrePelicula}`));
    //aplicar traversing 
    if (data2 == null || data2 == undefined || data2 == []) {
        acientos.forEach((Hilera) => {
            let fila = document.createElement("div");
            fila.classList.add("row")
            Hilera.forEach((aciento) => {
                let columna = document.createElement("div");
                columna.classList.add("col-3");

                let fotoSila = document.createElement("img");
                fotoSila.classList.add("img-fluid", "u-100");
                fotoSila.setAttribute("id", aciento.id);
                if (aciento.estado == 0) {
                    fotoSila.src = "../../assets/img/cinema-chair.png";
                } else if (aciento.estado == 2) {
                    fotoSila.src = "../../assets/img/cinema-chair-REd.png";
                }
                ///padres e hijos para poder pintar
                columna.appendChild(fotoSila);
                fila.appendChild(columna);
            })
            SalaCine.appendChild(fila);
        });
    } else {
        data2.forEach((Hilera) => {
            let fila = document.createElement("div");
            fila.classList.add("row")
            Hilera.forEach((aciento) => {
                let columna = document.createElement("div");
                columna.classList.add("col-3");

                let fotoSila = document.createElement("img");
                fotoSila.classList.add("img-fluid", "u-100");
                fotoSila.setAttribute("id", aciento.id);
                if (aciento.estado == 0) {
                    fotoSila.src = "../../assets/img/cinema-chair.png";
                } else if (aciento.estado == 2) {
                    fotoSila.src = "../../assets/img/cinema-chair-REd.png";
                }
                ///padres e hijos para poder pintar
                columna.appendChild(fotoSila);
                fila.appendChild(columna);
            })
            SalaCine.appendChild(fila);
        });
    }

};