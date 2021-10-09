  
  const aJSON = (objeto) => {
    return JSON.parse(objeto)
  }
  const carritoDeComprasNombre = 'carritoDeCompras';
  localStorage.setItem(carritoDeComprasNombre, JSON.stringify({carro: []}));
  
  
  const contenedorCarrito = document.getElementById('carritoContenedor');

  function agregarAlCarrito(id) {
    let carroLista =  aJSON(localStorage.getItem(carritoDeComprasNombre)).carro;
    console.log( carroLista)

    let productoRepetido =carroLista.find(prodR => prodR.id == id);
    if(productoRepetido){

      productoRepetido.cantidad = productoRepetido.cantidad + 1;
      document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`;
      actualizarCarrito()
    }else{

    let agregarProducto = tienda.find(producto => producto.id == id);
    carroLista.push(agregarProducto);
    localStorage.setItem(carritoDeComprasNombre, JSON.stringify({carro: carroLista}));

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
            carritoDeCompras = aJSON(localStorage.getItem(carritoDeComprasNombre)).carro.filter(prodE => prodE.id != agregarProducto.id)
            localStorage.setItem(carritoDeComprasNombre, JSON.stringify(carritoDeCompras));
            actualizarCarrito()
        }
    }
  };

  const contadorCarrito = document.getElementById('contadorCarrito');
  const precioTotal = document.getElementById('precioTotal');

  function actualizarCarrito() {
    
    let carritoPorActualizar = aJSON(localStorage.getItem(carritoDeComprasNombre)).carro
    contadorCarrito.innerText = carritoPorActualizar.reduce((acc, el)=> acc + el.cantidad,0);
    precioTotal.innerText = carritoPorActualizar.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    
  }
  