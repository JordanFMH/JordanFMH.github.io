const $abrir = document.querySelector(".abrir");
const $cerrar = document.querySelector(".cerrar");
const $nav = document.querySelector(".header-section-navegacion");

function abrir(){
    $nav.classList.add("nav-visible");
    $abrir.classList.add("ocultarBoton");
}
$abrir.addEventListener("click", abrir);

function cerrar(){
    $nav.classList.remove("nav-visible");
    $abrir.classList.remove("ocultarBoton");
}
$cerrar.addEventListener("click", cerrar);