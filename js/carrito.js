  
  const carritoDeComprasNombre = 'carritoDeCompras';
  const contenedorCarrito = document.getElementById('carritoContenedor');
  const contadorCarrito = document.getElementById('contadorCarrito');
  const precioTotal = document.getElementById('precioTotal');

  class Item {
    constructor(producto) {
      this.cantidad = 1;
      this.producto = producto;
    }
  }

  //funciones


  // --- LOCAL STORAGE ---
  const getCarro = () => {
    let carroEnObjeto = JSON.parse(localStorage.getItem(carritoDeComprasNombre))
    return carroEnObjeto.carro
  }

  const setCarro = (productosEnCarrito) => {
    let carroEnString = JSON.stringify({carro: productosEnCarrito});
    actualizarCarrito(productosEnCarrito);
    return localStorage.setItem(carritoDeComprasNombre, carroEnString);
  }

  const iniciarCarro = () => {
    let carroCreadoEnLocalStorage = JSON.parse(localStorage.getItem(carritoDeComprasNombre))
    if(!carroCreadoEnLocalStorage) {
      setCarro([]);
    } else {
      let carro = carroCreadoEnLocalStorage.carro;
      carro.forEach(item => {
        crearComponente(item.producto, item.cantidad)
      });
      actualizarCarrito(carro)
    }
  }

  // --- CARRITO ---

  function actualizarCarrito(carroLista) {
    let precioCalculado = 0
    carroLista.forEach(item => precioCalculado += item.cantidad * item.producto.precio)
    contadorCarrito.innerText = carroLista.length;
    precioTotal.innerText = precioCalculado
  }

  function agregarAlCarrito(id) {
    let carroLista = getCarro();

    let itemDeProductoRepetido = carroLista.find(item => item.producto.id == id);
    if(itemDeProductoRepetido){
      carroLista = agregarItemRepetido(carroLista, id)
    }else{
      carroLista = agregarNuevoItem(carroLista, id)
    }

    setCarro(carroLista)
  };

  const agregarItemRepetido = (carroLista, id) => {
    let indexDelItem = carroLista.map(i => i.producto.id).indexOf(id)
    let nuevaCantidad = carroLista[indexDelItem].cantidad + 1
    carroLista[indexDelItem].cantidad = nuevaCantidad
    document.getElementById(`cantidad${id}`).innerText = `Cantidad: ${nuevaCantidad}`;
    return carroLista
  }

  const agregarNuevoItem = (carroLista, id) => {
    let nuevoProducto = tienda.find(producto => producto.id == id);
    let nuevoItem = new Item(nuevoProducto)
    carroLista.push(nuevoItem);
    crearComponente(nuevoProducto, 1)
    return carroLista
  }

  const crearComponente = (agregarProducto, cantidad) => {

    let div = document.createElement("div");
    div.id = "div-" + agregarProducto.id
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <p id="cantidad${agregarProducto.id}">Cantidad: ${cantidad || agregarProducto.cantidad}</p>
                    <button id="eliminar${agregarProducto.id}" class="boton-eliminar"><img src="../assets/papelera-de-reciclaje.svg" alt="" class="logosRedesSocialesFooter"></button>`

    contenedorCarrito.appendChild(div);
    
    crearBotonEliminar(agregarProducto.id)
  }

  const crearBotonEliminar = (id) => {

    let botonEliminar = document.getElementById(`eliminar${id}`)

    botonEliminar.onclick = () => {
      eliminarItemPorId(id, botonEliminar)
    }
  }

  const eliminarItemPorId = (id, botonEliminar) => {
    let carroLista = getCarro()
    let indexOfItem = carroLista.map(i => i.producto.id).indexOf(id)
    let nuevaCantidad = carroLista[indexOfItem].cantidad - 1 
    if (nuevaCantidad === 0) {
    carroLista.splice(indexOfItem, 1)
    botonEliminar.parentElement.remove()
    } else {
      let componenteCantidad = document.getElementById(`cantidad${id}`)
      componenteCantidad.innerText = `Cantidad: ${nuevaCantidad}`
      carroLista[indexOfItem].cantidad = nuevaCantidad
    }
    setCarro(carroLista);
  }


  // Boton finalizar compra

const URLPOST = "../data/compra.json"

//function guardarCompra 

const guardarCompra = () => {
let data = {comprado : getCarro()}

// no pude editar el archivo json, seg??n lo que investigu?? no se puede 
// y tampoco tengo una api para completar el ejercicio 
/*
$.ajax({
  type: "POST",
  url: URLJSONPOST,
  data: JSON.stringify(data),
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(data){alert(data);},
  error: function(errMsg) {
      //alert(errMsg);
  }
}); 
*/
setCarro([])
contenedorCarrito.innerText = ""
}



const configFinalizaCompraBoton = () => {
  let finalizarCompra = document.getElementById('botonCompraFinalizada');

  if (finalizarCompra) {
  finalizarCompra.onclick = () => {
    cartel(getCarro().length == 0)
    guardarCompra()
  }
}else {
  
}
}

const cartel = (estaVacio) => {
  if (estaVacio){
    //Swal.fire("Agregue un producto al carrito", "error");
    Swal.fire("No tiene ning??n producto agregado al carrito", "", "error");
  } else {
    Swal.fire("Muchas gracias por su compra!", "En breve nos estaremos comunicando con usted", "success");
  }

}


    // ejecuci??n 

    iniciarCarro();
    configFinalizaCompraBoton()

  