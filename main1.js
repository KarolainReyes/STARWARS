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


/*PAGINAS PLANETAS*/


if (document.body.classList.contains("pagina-planetas")) {


    /*mapa de planetas*/
    if (document.body.classList.contains("pagina-planetas")) {
        const urlPlanetas = "https://swapi.dev/api/planets";
            const opciones = {method:"GET"};
            const lista = fetch (urlPlanetas,opciones)
            .then((respuesta)=>{
                if(respuesta.ok){
                    return respuesta.json();
                }
            })
            .then((datos)=>{
                const peticionPlanetas = datos.results;
                const segundaPeticionPlanetas = datos.next;
                if(peticionPlanetas){
                    return fetch (segundaPeticionPlanetas, opciones)
                    .then((respuesta2)=>{
                        if(respuesta2.ok){
                            return respuesta2.json();
                        }
                    })
                    .then((datos2)=>{
                        const peticionPlanetas2 = datos2.results;
                        listaPlanetas = peticionPlanetas.concat(peticionPlanetas2);
                    })
                }
            })
        let planetaActivo = null;
        let listaPlanetas = []
        document.addEventListener("click", function (event) {
            let planetaDis = [0.7, 0.12, 1.6, 0.5, 0.6, 0.2, 0.25, 0.15, 0.16, 0.13, 0.2,1.9,0.4,0.3,0.1, 0.1,0.2,0.1,0.4,0.1];
            
            console.log(listaPlanetas)
            if (event.target.classList.contains("planetas-mapa")) {
                const elemento = event.target;
                let id = Number(elemento.id.replace("planeta", ""));
             

                const infoAnterior = document.getElementById("planetaInfo");
                if (infoAnterior) infoAnterior.remove();

                planetaActivo = id;

                id -= 1;

                const mapa = document.getElementById("mapa-mundo");
                const estilos = getComputedStyle(elemento);
                const izquierdo = estilos.left;
                const altura = estilos.top;
                let izq = Number(izquierdo.replace("px", ""));
                let multi = izq * planetaDis[id];
                let izquierda = izq + multi;

                let contenidoPlaneta = document.createElement("div");
                contenidoPlaneta.id = "planetaInfo";
                contenidoPlaneta.innerHTML = `
                <h1>${listaPlanetas[id].name}</h1>
                <h2>Temperatura: ${listaPlanetas[id].climate}</h2>
                <h2>Gravedad: ${listaPlanetas[id].gravity}</h2>
                <h2>Terreno: ${listaPlanetas[id].terrain}</h2>
                <h2>Población: ${listaPlanetas[id].population}</h2>
              `;
              contenidoPlaneta.classList.add("contenidoPlanetas");
                contenidoPlaneta.style.position = "absolute";
                contenidoPlaneta.style.left = izquierda + "px";
                contenidoPlaneta.style.top = altura;

                mapa.appendChild(contenidoPlaneta);

            } else {
                const infoAnterior = document.getElementById("planetaInfo");
                    if (infoAnterior) infoAnterior.remove();
                    planetaActivo = null;
                    return;
            }
        });

    }



}   