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
    cargarPersonajesDroid();
    cargarPersonajesYoda();
    cargarPersonajesWookie();
    function cargarPersonajesPage() {
        const botonHumanos = document.getElementById("boton-mostrar-humanos");
        const humanos = document.getElementById("tarhumanos")
        const tarjetaHuman = document.getElementById("personajesHumanos")
        let humanoClick = false
        botonHumanos.addEventListener("click", () => {
            if (!humanoClick) {
                tarjetaHuman.classList.replace("oculto", "humanos");
                humanos.classList.replace("tarhumanos", "tarhumanos-extendido");
                humanoClick = true;
            } else {
                tarjetaHuman.classList.replace("humanos", "oculto");
                humanos.classList.replace("tarhumanos-extendido", "tarhumanos");
                humanoClick = false;
            }
        })
    };
    function cargarPersonajesDroid() {
        const botonDroid = document.getElementById("boton-mostrar-droid");
        const droides = document.getElementById("tardroid")
        const tarjetaDroides = document.getElementById("personajesDroid")
        let droidClick = false
        botonDroid.addEventListener("click", () => {
            if (!droidClick) {
                tarjetaDroides.classList.replace("oculto", "droid");
                droides.classList.replace("tardroid", "tardroid-extendido");
                droidClick = true;
            } else {
                tarjetaDroides.classList.replace("droid", "oculto");
                droides.classList.replace("tardroid-extendido", "tardroid");
                droidClick = false;
            }
        })
    };
    function cargarPersonajesYoda() {
        const botonYoda = document.getElementById("boton-mostrar-yoda");
        const yodas = document.getElementById("taryoda")
        const tarjetaYodas = document.getElementById("personajesYoda")
        let yodaClick = false
        botonYoda.addEventListener("click", () => {
            if (!yodaClick) {
                tarjetaYodas.classList.replace("oculto", "yoda");
                yodas.classList.replace("taryoda", "taryoda-extendido");
                yodaClick = true;
            } else {
                tarjetaYodas.classList.replace("yoda", "oculto");
                yodas.classList.replace("taryoda-extendido", "taryoda");
                yodaClick = false;
            }
        })
    };
    function cargarPersonajesWookie() {
        const botonWookie = document.getElementById("boton-mostrar-wookie");
        const wookies = document.getElementById("tarwookie")
        const tarjetaWookies = document.getElementById("personajesWookie")
        let wookieClick = false
        botonWookie.addEventListener("click", () => {
            if (!wookieClick) {
                tarjetaWookies.classList.replace("oculto", "wookie");
                wookies.classList.replace("tarwookie", "tarwookie-extendido");
                wookieClick = true;
            } else {
                tarjetaWookies.classList.replace("wookie", "oculto");
                wookies.classList.replace("tarwookie-extendido", "tarwookie");
                wookieClick = false;
            }
        })
    }
}
