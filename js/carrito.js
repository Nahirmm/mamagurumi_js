  
  const carritoDeComprasNombre = 'carritoDeCompras';

  const getCarro = () => {
    let carroEnObjeto = JSON.parse(localStorage.getItem(carritoDeComprasNombre))
    return carroEnObjeto.carro
  }

  const setCarro = (productosEnCarrito) => {
    let carroEnString = JSON.stringify({carro: productosEnCarrito});
    return localStorage.setItem(carritoDeComprasNombre, carroEnString);
  }

  const iniciarCarro = () => {
    let carro = JSON.parse(localStorage.getItem(carritoDeComprasNombre))
    if(!carro) {
      setCarro([]);
    }
  }

  iniciarCarro();

  const contenedorCarrito = document.getElementById('carritoContenedor');

  function agregarAlCarrito(id) {
    let carroLista = getCarro();

    let productoRepetido = carroLista.find(prodR => prodR.id == id);
    if(productoRepetido){

      productoRepetido.cantidad = productoRepetido.cantidad + 1;
      document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`;
      actualizarCarrito()
    }else{

    let agregarProducto = tienda.find(producto => producto.id == id);
    carroLista.push(agregarProducto);
    setCarro(carroLista);

    agregarProducto.cantidad = 1;
    actualizarCarrito();
    let div = document.createElement("div");
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <p id="cantidad${agregarProducto.id}">Cantidad: ${agregarProducto.cantidad}</p>
                    <button id="eliminar${agregarProducto.id}" class="boton-eliminar"><img src="../assets/papelera-de-reciclaje.svg" alt="" class="logosRedesSocialesFooter"></button>`

    contenedorCarrito.appendChild(div);

    let botonEliminar = document.getElementById(`eliminar${agregarProducto.id}`)

        botonEliminar.onclick = () => {
          botonEliminar.parentElement.remove()
            carritoDeCompras = getCarro().filter(prodE => prodE.id != agregarProducto.id)
            setCarro(carritoDeCompras);
            actualizarCarrito()
        }
    }
  };

  const contadorCarrito = document.getElementById('contadorCarrito');
  const precioTotal = document.getElementById('precioTotal');

  function actualizarCarrito() {
    
    let carritoPorActualizar = getCarro();
    contadorCarrito.innerText = carritoPorActualizar.reduce((acc, el)=> acc + el.cantidad,0);
    precioTotal.innerText = carritoPorActualizar.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    
  }
  