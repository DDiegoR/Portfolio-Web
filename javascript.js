
// MENU DESPLEGABLE DE BARRA NAVEGACION
var mostrar = false;
function desplegarMenu(){
    const menu = document.getElementById("contenidoMenu");
    const accion = document.getElementById("ham-box-inner");
    const seccion = document.getElementById("contenedorCentral");
    const logo = document.getElementById("logoCentral");
    if (mostrar == false){
        menu.style.visibility = "visible";
        menu.style.transform = "translateX(0vw)";
        accion.style.transform = "rotate(225deg)";
        accion.classList.add("ham-box-inner-open");
        seccion.style.display = "none";
        logo.style.display = "none";
        mostrar = true;
    }
    else {
        menu.style.visibility = "hidden";
        logo.style.display = "block";
        seccion.style.display = "block";
        accion.style.transform = "rotate(0deg)";
        accion.classList.remove("ham-box-inner-open");
        mostrar = false;
    }
}

function desplazarSeccionMenu(){
    const menu = document.getElementById("contenidoMenu");
    const accion = document.getElementById("ham-box-inner");
    const seccion = document.getElementById("contenedorCentral");
    const logo = document.getElementById("logoCentral");
    menu.style.visibility = "hidden";
    menu.style.transform = "translateX(100vw)";
    accion.style.transform = "rotate(0deg)";
    logo.style.display = "block";
    seccion.style.display = "block";
    accion.classList.remove("ham-box-inner-open");
    mostrar = false;
}
// FIN MENU DESPLEGABLE DE BARRA DE NAVEGACION

// EVENTOS BOTONES ESTUDIOS SECCION 2
const botones = document.querySelectorAll(".botonEstudio");
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        removeActiveClassesBotones()
        boton.classList.add('activeBoton')
    })
} )
function removeActiveClassesBotones() {
    botones.forEach(boton => {
        boton.classList.remove('activeBoton')
    })
}

function cambiaF(){
    document.getElementById("facultad").style.display = "block";
    document.getElementById("cursoDW").style.display = "none";
    document.getElementById("argentinaPrograma").style.display = "none";
}
function cambiaDW(){
    document.getElementById("facultad").style.display = "none";
    document.getElementById("cursoDW").style.display = "block";
    document.getElementById("argentinaPrograma").style.display = "none";
}
function cambiaAP(){
    document.getElementById("facultad").style.display = "none";
    document.getElementById("cursoDW").style.display = "none";
    document.getElementById("argentinaPrograma").style.display = "block";
}


// SECCION PROYECTOS

// CAJA IMAGENES 
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })   
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// FIN CAJA IMAGENES


// TITULOS SECCION ESTUDIOS
var imagen = document.getElementById("imagenTitulo");
var modal = document.getElementById('titulo')
modal.addEventListener('show.bs.modal', function (event) {
    // Botón que activó el modal
    var a = event.relatedTarget
    // Extraer información de los atributos data-bs-*
    var recipient = a.getAttribute('data-bs-whatever')
    // Si es necesario, puedes iniciar una solicitud AJAX aquí
    // y luego realiza la actualización en una devolución de llamada.
    //
    // Actualizar el contenido del modal.
    if (recipient == "@ien") {  
        imagen.src="imagenes/tituloIEN.png";
    }
    if (recipient == "@ap"){
        imagen.src="imagenes/ap.png";
    }
})

// CAMBIO DE IDIOMA
// var check = document.querySelector(".check");
// check.addEventListener("click", idioma);

// function idioma() {
//     let id = check.checked;
//     if (id == true){
//         location.href = "en/index.html";
//     } else {
//         location.href = "../index.html";
//     }
// }