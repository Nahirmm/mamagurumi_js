const carritoAbrir = document.getElementById('botonCarrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modalContenedor')[0]
const carritoModal = document.getElementsByClassName('modalCarrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active');
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active');
})
carritoModal.addEventListener('click',(e)=>{
    e.stopPropagation();
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click();
})