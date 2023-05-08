let busqueda = document.querySelector(".buscador-caja");

document.querySelector("#buscador-icono").onclick = () => {
    busqueda.classList.toggle("active");
    menu.classList.remove("active");
}

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icono").onclick = () => {
    menu.classList.toggle("active");
    busqueda.classList.remove("active");
}

window.onscroll=()=>{
    busqueda.classList.remove("active");
    menu.classList.remove("active");
}