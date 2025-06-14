//FUNCIONALIDADES JS


//MAIN PAGE
//Barras mouseover
function cargarIndex() {
    const planetasPanel = document.getElementById("barra-planetas")
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
    const personajeTarjeta = document.getElementById("barra-personajes");
    const navesTarjeta = document.getElementById("barra-naves");
    const peliculasTarjeta = document.getElementById("barra-peliculas");
    personajeTarjeta.addEventListener("click", () => { window.open("./characters.html", "_self") });
    navesTarjeta.addEventListener("click", () => { window.open("./world.html", "_self") });
    peliculasTarjeta.addEventListener("click", () => { window.open("./characters.html", "_self") });
    planetasPanel.addEventListener("click", () => { window.open("./worlds.html", "_self") });


}

if (document.body.classList.contains("pagina-index")) {
    document.addEventListener("DOMContentLoaded", () => {
        cargarIndex();
    });
}
//CHARACTERS

// if (document.body.classList.contains("pagina-personajes")) {
//     cargarPersonajesPage();
//     cargarPersonajesDroid();
//     cargarPersonajesYoda();
//     cargarPersonajesWookie();
//     function cargarPersonajesPage() {
//         const botonHumanos = document.getElementById("boton-mostrar-humanos");
//         const humanos = document.getElementById("tarhumanos")
//         const tarjetaHuman = document.getElementById("personajesHumanos")
//         let humanoClick = false
//         botonHumanos.addEventListener("click", () => {
//             if (!humanoClick) {
//                 tarjetaHuman.classList.replace("oculto", "humanos");
//                 humanos.classList.replace("tarhumanos", "tarhumanos-extendido");
//                 humanoClick = true;
//             } else {
//                 tarjetaHuman.classList.replace("humanos", "oculto");
//                 humanos.classList.replace("tarhumanos-extendido", "tarhumanos");
//                 humanoClick = false;
//             }
//         })
//     };
//     function cargarPersonajesDroid() {
//         const botonDroid = document.getElementById("boton-mostrar-droid");
//         const droides = document.getElementById("tardroid")
//         const tarjetaDroides = document.getElementById("personajesDroid")
//         let droidClick = false
//         botonDroid.addEventListener("click", () => {
//             if (!droidClick) {
//                 tarjetaDroides.classList.replace("oculto", "droid");
//                 droides.classList.replace("tardroid", "tardroid-extendido");
//                 droidClick = true;
//             } else {
//                 tarjetaDroides.classList.replace("droid", "oculto");
//                 droides.classList.replace("tardroid-extendido", "tardroid");
//                 droidClick = false;
//             }
//         })
//     };
//     function cargarPersonajesYoda() {
//         const botonYoda = document.getElementById("boton-mostrar-yoda");
//         const yodas = document.getElementById("taryoda")
//         const tarjetaYodas = document.getElementById("personajesYoda")
//         let yodaClick = false
//         botonYoda.addEventListener("click", () => {
//             if (!yodaClick) {
//                 tarjetaYodas.classList.replace("oculto", "yoda");
//                 yodas.classList.replace("taryoda", "taryoda-extendido");
//                 yodaClick = true;
//             } else {
//                 tarjetaYodas.classList.replace("yoda", "oculto");
//                 yodas.classList.replace("taryoda-extendido", "taryoda");
//                 yodaClick = false;
//             }
//         })
//     };
//     function cargarPersonajesWookie() {
//         const botonWookie = document.getElementById("boton-mostrar-wookie");
//         const wookies = document.getElementById("tarwookie")
//         const tarjetaWookies = document.getElementById("personajesWookie")
//         let wookieClick = false
//         botonWookie.addEventListener("click", () => {
//             if (!wookieClick) {
//                 tarjetaWookies.classList.replace("oculto", "wookie");
//                 wookies.classList.replace("tarwookie", "tarwookie-extendido");
//                 wookieClick = true;
//             } else {
//                 tarjetaWookies.classList.replace("wookie", "oculto");
//                 wookies.classList.replace("tarwookie-extendido", "tarwookie");
//                 wookieClick = false;
//             }
//         })
//     }
// }


/*PAGINAS PLANETAS*/


if (document.body.classList.contains("pagina-planetas")) {


    /*mapa de planetas*/
    if (document.body.classList.contains("pagina-planetas")) {
        const urlPlanetas = "https://swapi.dev/api/planets";
        const opciones = { method: "GET" };
        const lista = fetch(urlPlanetas, opciones)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then((datos) => {
                const peticionPlanetas = datos.results;
                const segundaPeticionPlanetas = datos.next;
                if (peticionPlanetas) {
                    return fetch(segundaPeticionPlanetas, opciones)
                        .then((respuesta2) => {
                            if (respuesta2.ok) {
                                return respuesta2.json();
                            }
                        })
                        .then((datos2) => {
                            const peticionPlanetas2 = datos2.results;
                            listaPlanetas = peticionPlanetas.concat(peticionPlanetas2);
                        })
                }
            })
        let planetaActivo = null;
        let listaPlanetas = []
        document.addEventListener("click", function (event) {
            let planetaDis = [0.7, 0.12, 1.6, 0.5, 0.6, 0.2, 0.25, 0.15, 0.16, 0.13, 0.2, 1.9, 0.4, 0.3, 0.1, 0.1, 0.2, 0.1, 0.4, 0.1];

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


/*CHARACTER PAGE */

if (document.body.classList.contains("pagina-personajes")) {
    let listaHumanos = [];
    let listaDroides = [];
    let listaYodass = [];
    let listaWookiess = [];
    const listaFotos = ["./assets/characters/1.png", "./assets/characters/2.png", "./assets/characters/3.png", "./assets/characters/4.png", "./assets/characters/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png", "./assets/characters.html/1.png",]
    const urlPersonajes = "https://swapi.dev/api/people";
    const opciones = { method: "GET" };

    fetch(urlPersonajes, opciones)
        .then(respuesta => respuesta.ok ? respuesta.json() : Promise.reject("Error al cargar personajes"))
        .then(datos => {
            const peticionPersonajes = datos.results;
            const segundaPeticionPersonajes = datos.next;
            return fetch(segundaPeticionPersonajes, opciones)
                .then(respuesta2 => respuesta2.ok ? respuesta2.json() : Promise.reject("Error en segunda petición"))
                .then(datos2 => {
                    const peticionPersonajes2 = datos2.results;
                    const listaPersonajes = peticionPersonajes.concat(peticionPersonajes2);

                    listaPersonajes.forEach(personaje => {
                        if (Array.isArray(personaje.species) && personaje.species.length === 0) {

                            listaHumanos.push(personaje);
                        } else {

                            const especieURL = personaje.species[0];
                            switch (especieURL) {
                                case "https://swapi.dev/api/species/2/":
                                    listaDroides.push(personaje);
                                    break;
                                case "https://swapi.dev/api/species/3/":
                                    listaWookiess.push(personaje);
                                    break;
                                case "https://swapi.dev/api/species/6/":
                                    listaYodass.push(personaje);
                                    break;

                            }
                        }
                    });

                });
        })
        .catch(error => console.error(error));
    const botonHumanos = document.getElementById("boton-mostrar-humanos");
    const contenedorHumanos = document.getElementById("humanos-contenedor");
    const humanos = document.getElementById("tarhumanos")
    const tarjetaHuman = document.getElementById("personajesHumanos")
    let humanoClick = false
    botonHumanos.addEventListener("click", () => {
        if (!humanoClick) {
const nuevoDiv = document.createElement("div");nuevoDiv.classList.add("humanos")
            for (let i = 0; i < 11; i++) {
                
                
                nuevoDiv.innerHTML += `<div class="tarjeta-charac">
                <h1>${listaHumanos[i].name}</h1>
                <div class="imagenPerso">
                <img src=${listaFotos[i]}>
                </div>
                <div class="descripcion">
                <h2>Altura: ${listaHumanos[i].height}</h2>
                <h2>Peso: ${listaHumanos[i].mass}</h2>
                <h2>Cumpleaños: ${listaHumanos[i].birth_year}</h2>
                <h2>Genero: ${listaHumanos[i].gender}</h2>
                </div>
                </div>`;
                humanos.appendChild(nuevoDiv);
            }
        } else {
            tarjetaHuman.classList.replace("humanos", "oculto");
            humanos.classList.replace("tarhumanos-extendido", "tarhumanos");
            humanoClick = false;
        }
    })




    const botonDroid = document.getElementById("boton-mostrar-droid");
    const botonYoda = document.getElementById("boton-mostrar-yoda");
    const botonWookie = document.getElementById("boton-mostrar-wookie");




}


