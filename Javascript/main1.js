
//FUNCIONALIDADES JS
function devolverInicio() {
    const botonVolver = getElementById("starwars");
    botonVolver.addEventListener("click", () => window.open("./index.html", "_self"))
}

//MAIN PAGE
//Barras mouseover
function cargarIndex() {
    if (window.matchMedia("(min-width: 800px)").matches){
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
    } }
    //Enlaces
    const personajeTarjeta = document.getElementById("barra-personajes");
    const navesTarjeta = document.getElementById("barra-naves");
    const peliculasTarjeta = document.getElementById("barra-peliculas");
    const planetasPanel = document.getElementById("barra-planetas");
    personajeTarjeta.addEventListener("click", () => { window.open("/STARWARS/Html/characters.html", "_self") });
    navesTarjeta.addEventListener("click", () => { window.open("/STARWARS/Html/starships.html", "_self") });
    peliculasTarjeta.addEventListener("click", () => { window.open("/STARWARS/Html/movies.html", "_self") });
    planetasPanel.addEventListener("click", () => { window.open("/STARWARS/Html/worlds.html", "_self") });


}

if (document.body.classList.contains("pagina-index")) {
    document.addEventListener("DOMContentLoaded", () => {
        cargarIndex();
    });
}
/*PAGINAS PLANETAS*/
if (document.body.classList.contains("pagina-planetas")) {

    const urlPlanetas = "https://swapi.py4e.com/api/planets";
    const opciones = { method: "GET" };

    // Obtener todas las imágenes del DOM en orden
    const planetasDOM = document.querySelectorAll(".planetas-mapa");
    const imagenesPlanetas = Array.from(planetasDOM).map(p => p.src);

    let listaPlanetas = [];

    fetch(urlPlanetas, opciones)
        .then(respuesta => respuesta.ok ? respuesta.json() : Promise.reject())
        .then(datos => {
            const peticionPlanetas = datos.results;
            const segundaPeticionPlanetas = datos.next;

            return fetch(segundaPeticionPlanetas, opciones)
                .then(respuesta2 => respuesta2.ok ? respuesta2.json() : Promise.reject())
                .then(datos2 => {
                    const peticionPlanetas2 = datos2.results;
                    listaPlanetas = peticionPlanetas.concat(peticionPlanetas2);

                    const buscador = document.getElementById("buscar-barra");
                    const contenedorResultados = document.getElementById("resultadosBusqueda");

                    buscador.addEventListener("input", function () {
                        const termino = this.value.toLowerCase();
                        contenedorResultados.innerHTML = "";

                        if (termino.trim() === "") {
                            contenedorResultados.style.display = "none";
                            return;
                        }

                        const resultados = listaPlanetas.filter(planeta =>
                            planeta.name.toLowerCase().includes(termino)
                        );

                        if (resultados.length === 0) {
                            contenedorResultados.style.display = "block";
                            contenedorResultados.innerHTML = `<p style="color:white; padding: 10px;">No se encontraron planetas.</p>`;
                            return;
                        }

                        contenedorResultados.style.display = "block";

                        resultados.forEach(planeta => {
                            const id = listaPlanetas.indexOf(planeta); // posición en el array
                            const imgSrc = imagenesPlanetas[id] || "";

                            const div = document.createElement("div");
                            div.classList.add("resultado-item");

                            div.innerHTML = `
                                <div class="resultado-contenido">
                                    <img src="${imgSrc}" alt="${planeta.name}" class="img-planeta-mini">
                                    <div class="info-planeta">
                                        <h2>${planeta.name}</h2>
                                        <p>Temperatura: ${planeta.climate}</p>
                                        <p>Gravedad: ${planeta.gravity}</p>
                                        <p>Terreno: ${planeta.terrain}</p>
                                        <p>Población: ${planeta.population}</p>
                                    </div>
                                </div>
                            `;
                            contenedorResultados.appendChild(div);
                        });
                    });
                });
        });

    let planetaActivo = null;

    document.addEventListener("click", function (event) {
        let planetaDis = [0.7, 0.12, 1.6, 0.5, 0.6, 0.2, 0.25, 0.15, 0.16, 0.13, 0.2, 1.9, 0.4, 0.3, 0.1, 0.1, 0.2, 0.1, 0.4, 0.1];
        let planetaSid = []
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
            let altura
            if (id != 11 && id != 3 && id != 13 && id != 15 && id != 19) { altura = Number(estilos.top.replace("px", "")); }
            else { altura = Number(estilos.top.replace("px", "") - estilos.top.replace("px", "") * 0.2);console.log(altura) }

            let izquierda
            let izq = Number(izquierdo.replace("px", ""));
            if (id != 17 && id != 8 && id != 7 && id != 6 && id != 19 && id != 15) {

                let multi = izq * planetaDis[id];
                izquierda = izq + multi;
            } else {

                let multi = izq * 0.3;
                izquierda = izq - multi;
            }

            let contenidoPlaneta = document.createElement("div");
            contenidoPlaneta.id = "planetaInfo";
            contenidoPlaneta.innerHTML = `
                <h1 style="color:white">${listaPlanetas[id].name}</h1>
                <h2><span style="color:white">Temperatura:</span> ${listaPlanetas[id].climate}</h2>
                <h2><span style="color:white">Gravedad:</span> ${listaPlanetas[id].gravity}</h2>
                <h2><span style="color:white">Terreno:</span> ${listaPlanetas[id].terrain}</h2>
                <h2><span style="color:white">Población:</span> ${listaPlanetas[id].population}</h2>
              `;
            contenidoPlaneta.classList.add("contenidoPlanetas");
            contenidoPlaneta.style.position = "absolute";
            contenidoPlaneta.style.left = izquierda + "px";
            contenidoPlaneta.style.top = altura + "px";

            mapa.appendChild(contenidoPlaneta);

        } else {
            const infoAnterior = document.getElementById("planetaInfo");
            if (infoAnterior) infoAnterior.remove();
            planetaActivo = null;
        }
    });
}


if (document.body.classList.contains("pagina-personajes")) {
    let listaHumanos = [];
    let listaDroides = [];
    let listaYodass = [];
    let listaWookiess = [];
    const listaFotos = [
        "../assets/characters/1.png", "../assets/characters/2.png", "../assets/characters/3.png",
        "../assets/characters/4.png", "../assets/characters/5.png", "../assets/characters/6.png",
        "../assets/characters/7.png", "../assets/characters/8.png", "../assets/characters/9.png",
        "../assets/characters/10.png", "../assets/characters/11.png", "../assets/characters/12.png",
        "../assets/characters/13.png", "../assets/characters/14.png", "../assets/characters/15.png", "../assets/characters/16.png"];

    const urlPersonajes = "https://swapi.py4e.com/api/people/";
    const opciones = { method: "GET" };

    fetch(urlPersonajes, opciones)
        .then(res => res.ok ? res.json() : Promise.reject("Error al cargar personajes"))
        .then(datos => {
            const primeraPagina = datos.results;
            return fetch(datos.next, opciones)
                .then(res2 => res2.ok ? res2.json() : Promise.reject("Error segunda página"))
                .then(datos2 => primeraPagina.concat(datos2.results));
        })
        .then(listaPersonajes => {
            listaPersonajes.forEach(personaje => {
                if (personaje.species.length > 0) {
                    switch (personaje.species[0]) {
                        case "https://swapi.py4e.com/api/species/2/":
                            listaDroides.push(personaje);
                            break;
                        case "https://swapi.py4e.com/api/species/3/":
                            listaWookiess.push(personaje);
                            break;
                        case "https://swapi.py4e.com/api/species/6/":
                            listaYodass.push(personaje);
                            break;
                        default:
                            listaHumanos.push(personaje);
                    }
                } else {
                    listaHumanos.push(personaje);
                }
            });

            const botonHumanos = document.getElementById("boton-mostrar-humanos");
            const humanos = document.getElementById("tarhumanos");
            let humanoClick = false;

            botonHumanos.addEventListener("click", () => {
                if (!humanoClick) {
                    const nuevoDiv = document.createElement("div");
                    nuevoDiv.classList.add("humanos");
                    nuevoDiv.setAttribute("id", "personajesHumanosYa");
                    humanos.classList.replace("tarhumanos", "tarhumanos-extendido")
                    for (let i = 0; i < 11; i++) {
                        const personaje = listaHumanos[i];
                        const personajeDiv = document.createElement("div");
                        personajeDiv.classList.add("tarjeta-charac");

                        personajeDiv.innerHTML = `
                            <h1>${personaje.name}</h1>
                            <div class="imagenPerso">
                                <img src="${listaFotos[i]}" alt="${personaje.name}">
                            </div>
                            <div class="descripcion">
                                <h2>Altura: ${personaje.height}</h2>
                                <h2>Peso: ${personaje.mass}</h2>
                                <h2>Cumpleaños: ${personaje.birth_year}</h2>
                                <h2>Género: ${personaje.gender}</h2>
                            </div>
                        `;
                        nuevoDiv.appendChild(personajeDiv);
                    }

                    humanos.appendChild(nuevoDiv);
                    humanoClick = true;
                } else {
                    humanos.classList.replace("tarhumanos-extendido", "tarhumanos")
                    document.getElementById("personajesHumanosYa").remove();
                    humanoClick = false;
                }
            });
        })
        .catch(error => console.error(error));




    const botonHumanos = document.getElementById("boton-mostrar-humanos");
    const botonDroid = document.getElementById("boton-mostrar-droid");
    const botonYoda = document.getElementById("boton-mostrar-yoda");
    const botonWookie = document.getElementById("boton-mostrar-wookie");

    const humanos = document.getElementById("tarhumanos");
    const droides = document.getElementById("tardroid");
    const yodas = document.getElementById("taryoda");
    const wookies = document.getElementById("tarwookie");

    let humanoClick = false;
    let droidClick = false;
    let yodaClick = false;
    let wookieClick = false;

    botonDroid.addEventListener("click", () => {
        if (!droidClick) {
            console.log(listaDroides)
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("droid");
            nuevoDiv.setAttribute("id", "personajesDroidesYa");
            droides.classList.replace("tardroid", "tardroid-extendido");

            for (let i = 0; i < 3; i++) {
                const personaje = listaDroides[i];
                const personajeDiv = document.createElement("div");
                personajeDiv.classList.add("tarjeta-charac");

                personajeDiv.innerHTML = `
                <h1>${listaDroides[i].name}</h1>
                <div class="imagenPerso">
                    <img src="${listaFotos[i + 11]}">
                </div>
                <div class="descripcion">
                    <h2>Altura: ${personaje.height}</h2>
                    <h2>Peso: ${personaje.mass}</h2>
                    <h2>Cumpleaños: ${personaje.birth_year}</h2>
                    <h2>Género: ${personaje.gender}</h2>
                </div>
            `;
                nuevoDiv.appendChild(personajeDiv);
            }
            droides.appendChild(nuevoDiv);
            droidClick = true;
        } else {
            droides.classList.replace("tardroid-extendido", "tardroid");
            document.getElementById("personajesDroidesYa").remove();
            droidClick = false;
        }
    });
    botonYoda.addEventListener("click", () => {
        if (!yodaClick) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("yoda");
            nuevoDiv.setAttribute("id", "personajesYodaYa");
            yodas.classList.replace("taryoda", "taryoda-extendido");

            const personaje = listaYodass[0];  // primer y único personaje
            const personajeDiv = document.createElement("div");
            personajeDiv.classList.add("tarjeta-charac");

            personajeDiv.innerHTML = `
            <h1>${personaje.name}</h1>
            <div class="imagenPerso">
                <img src="${listaFotos[14]}" alt="${personaje.name}">
            </div>
            <div class="descripcion">
                <h2>Altura: ${personaje.height}</h2>
                <h2>Peso: ${personaje.mass}</h2>
                <h2>Cumpleaños: ${personaje.birth_year}</h2>
                <h2>Género: ${personaje.gender}</h2>
            </div>
        `;
            nuevoDiv.appendChild(personajeDiv);
            yodas.appendChild(nuevoDiv);
            yodaClick = true;
        } else {
            yodas.classList.replace("taryoda-extendido", "taryoda");
            document.getElementById("personajesYodaYa").remove();
            yodaClick = false;
        }
    });
    botonWookie.addEventListener("click", () => {
        if (!wookieClick) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("wookie");
            nuevoDiv.setAttribute("id", "personajesWookieYa");
            wookies.classList.replace("tarwookie", "tarwookie-extendido");

            const personaje = listaWookiess[0];
            const personajeDiv = document.createElement("div");
            personajeDiv.classList.add("tarjeta-charac");

            personajeDiv.innerHTML = `
            <h1>${personaje.name}</h1>
            <div class="imagenPerso">
                <img src="${listaFotos[15]}" alt="${personaje.name}">
            </div>
            <div class="descripcion">
                <h2>Altura: ${personaje.height}</h2>
                <h2>Peso: ${personaje.mass}</h2>
                <h2>Cumpleaños: ${personaje.birth_year}</h2>
                <h2>Género: ${personaje.gender}</h2>
            </div>
        `;
            nuevoDiv.appendChild(personajeDiv);
            wookies.appendChild(nuevoDiv);
            wookieClick = true;
        } else {
            wookies.classList.replace("tarwookie-extendido", "tarwookie");
            document.getElementById("personajesWookieYa").remove();
            wookieClick = false;
        }
    });

}
document.addEventListener("DOMContentLoaded", () => {
    const botonVolver = document.getElementById("starwars");
    botonVolver.addEventListener("click", () => {
        window.open("/STARWARS/index.html", "_self");
    });
});
