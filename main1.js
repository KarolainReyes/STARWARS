//FUNCIONALIDADES JS


//MAIN PAGE
//Barras mouseover
function cargarIndex() {
    const planetasPanel = document.getElementById("aaa")
    planetasPanel.addEventListener("mouseover", planetasMostrar);
    const planetasComplementario = document.getElementById("plane");
    const planeta1 = document.getElementById("planeta1");
    const planeta2 = document.getElementById("planeta2");
    console.log(planetasComplementario.classList)
    function planetasMostrar() {
        planetasComplementario.classList.replace("planeta-complementario", "planeta-complementario-visible");

    }
    planetasPanel.addEventListener("mouseout", planetasOcultar);
    function planetasOcultar() {
        planetasComplementario.classList.replace("planeta-complementario-visible", "planeta-complementario");
    }

    //Enlaces

    //abierto para añadir enlaces principales
}

if (document.body.classList.contains("pagina-index")) {
    cargarIndex();
}
//CHARACTERS

if (document.body.classList.contains("pagina-personajes")) {
    cargarPersonajesPage();
}

function cargarPersonajesPage() {
    console.log("aaa")
    const humanos = document.getElementsByClassName("tarhumanos")[0];
    console.log(humanos)
    const tarjetaHuman = document.getElementsByClassName("oculto")[0];
    console.log(tarjetaHuman)
    humanos.addEventListener("click", mostrarPersonajes);
    function mostrarPersonajes() {
        tarjetaHuman.classList.replace("oculto","humanos")
        humanos.classList.replace("tarhumanos","tarhumanos-extendido")
    }



}
