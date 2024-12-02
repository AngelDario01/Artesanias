const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 60)
});

//agregar un evento click al elemento clase .btn
document.querySelector('.btn').addEventListener("click", function(){
    alert('te hemos contactado');
})
/*document.querySelector('.boton').addEventListener("click", function(){
    alert('desea aceptar su compra');
})*/

//agregar un evento click a cada uno de los botones encontrado con una una misma clase
document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert('gracias por contactarnos');
    })
})

//funcion para los botones haciendolas con su id declarado en html
document.getElementById('boton-contacto').addEventListener('click', function(){
    alert('hemos guardado sus datos para contactarlo');
})
document.getElementById('boton-compra').addEventListener('click', function(){
    alert('compra realizada con exito');
})

document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        //deszplazamiento suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const imagenes= [
    'img/zapato1.jpg',
    'img/zapato2.jpg',
    'img/zapato3.jpg',
    'img/zapato4.jpg',
    'img/zapato5.jpg',
    'img/zapato6.jpg'
];
const homeSection = document.querySelector('.home');
const intervalo = 2000;  // 2000 ms = 2s
let indiceImagen = 0;
function cambiodefondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left, rgba(192, 85, 52, 0.6), 
    rgba(192, 85, 52, 0.3)), 
    url(${imagenes[indiceImagen]})`;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
} 
setInterval(cambiodefondo, intervalo)

//mennu pantallas pequeñas
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlace = document.querySelectorAll('.navbar a');

menu.onclick = () =>{
    navbar.classList.toggle('open')
    menu.classList.toggle('bx-x')
}
enlace.forEach(link =>{
    link.onclick = () =>{
        navbar.classList.remove('open')
        menu.classList.remove('bx-x')
    }
})

var typed = new Typed('#typed', {
    strings: ['lo mejor para ti', 'gracias por su preferencia',
        'la mejor calidad de nuestros productos'],
    typeSpeed: 50,
    loop: "true",
    backSpeed: 20,
});
