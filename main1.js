//FUNCIONALIDADES JS

//Barras mouseover

const planetasPanel = document.getElementById("aaa")
planetasPanel.addEventListener("mouseover",planetasMostrar);
const planetasComplementario = document.getElementById("plane");
console.log(planetasComplementario.classList)
function planetasMostrar(){
    planetasComplementario.classList.replace("planeta-complementario","planeta-complementario-visible");
    console.log(planetasComplementario.classList)
}   
planetasPanel.addEventListener("mouseout",planetasOcultar);
function planetasOcultar(){
    planetasComplementario.classList.replace("planeta-complementario-visible","planeta-complementario"); 
}

//Enlaces

