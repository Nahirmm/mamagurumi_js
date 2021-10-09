  
  const carritoDeComprasNombre = 'carritoDeCompras';
  const contenedorCarrito = document.getElementById('carritoContenedor');
  const contadorCarrito = document.getElementById('contadorCarrito');
  const precioTotal = document.getElementById('precioTotal');

  class Item {
    constructor(carroLista, producto) {
      this.index = carroLista.length;
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
      actualizarCarrito(carroCreadoEnLocalStorage.carro)
    }
  }

  // --- CARRITO ---

  function actualizarCarrito(carroLista) {
    contadorCarrito.innerText = carroLista.length;
    precioTotal.innerText = carroLista.reduce((acc,el)=> acc + (el.producto.precio * el.cantidad),0)
  }

  function agregarAlCarrito(id) {
    let carroLista = getCarro();

    let itemDeProductoRepetido = carroLista.find(item => item.producto.id == id);
    if(itemDeProductoRepetido){
      agregarItemRepetido(carroLista, itemDeProductoRepetido)
    }else{
      agregarNuevoItem(carroLista, id)
    }
  };

  const agregarItemRepetido = (carroLista, itemRepetido) => {
    
    let nuevaCantidad = carroLista[itemRepetido.index].cantidad + 1
    carroLista[itemRepetido.index].cantidad = nuevaCantidad
    setCarro(carroLista)
    let idProducto = itemRepetido.producto.id
    document.getElementById(`cantidad${idProducto}`).innerHTML = `<p id="cantidad${idProducto}">Cantidad: ${nuevaCantidad}</p>`;
  }

  const agregarNuevoItem = (carroLista, id) => {
    let agregarProducto = tienda.find(producto => producto.id == id);
    let nuevoItem = new Item(carroLista, agregarProducto)
    carroLista.push(nuevoItem);

    let div = document.createElement("div");
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <p id="cantidad${agregarProducto.id}">Cantidad: ${agregarProducto.cantidad}</p>
                    <button id="eliminar${agregarProducto.id}" class="boton-eliminar"><img src="../assets/papelera-de-reciclaje.svg" alt="" class="logosRedesSocialesFooter"></button>`

    contenedorCarrito.appendChild(div);
    
    setCarro(carroLista);
  }

  const onClickBotonEliminar = () => {
    let carroLista = getCarro()
    let botonEliminar = document.getElementById(`eliminar${agregarProducto.id}`)

        botonEliminar.onclick = () => {
          botonEliminar.parentElement.remove()
            carritoDeCompras = carroLista.filter(itemE => itemE.producto.id != agregarProducto.id)
            setCarro(carroLista);
        }
  }

    // ejecución 

    iniciarCarro();

  