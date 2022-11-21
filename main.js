window.addEventListener("scroll", function(){
	let header = document.querySelector('header');
	header.classList.toggle('abajo',window.scrollY>0);
	let botonUp = document.querySelector('.aup');
	botonUp.classList.toggle('up',window.scrollY>400);
});

//SpyMenu
let menu=document.getElementById('menu');
const indicador=document.getElementById('indicador');
const secciones=document.querySelectorAll('.Secciones');

let tamañoIndicador=menu.querySelector('a').offsetWidth;
indicador.style.width=tamañoIndicador +"px";

let indexSeccionActiva;
//observador
const observer = new IntersectionObserver((entradas,observer) =>{
entradas.forEach(entrada=>{
  if (entrada.isIntersecting){
  	indexSeccionActiva = [...secciones].indexOf(entrada.target);

  	indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
  }
});
},{
	threshold:0.6
});
// asignamos un observador a cada una de las secciones
secciones.forEach(seccion=>observer.observe(seccion));


//evento para cuando la pantalla cambie de tamaño.
const onResize=()=>{
	//calcula el nuevo tamapo del indicador
	tamañoIndicador=menu.querySelector('a').offsetWidth;

	//cambiamos el tamaño
	indicador.style.width=`${tamañoIndicador}px`;

	//camio de posicion

	indicador.style.transform=`translateX(${tamañoIndicador * indexSeccionActiva}px)`;
};
window.addEventListener('resize',onResize);
  