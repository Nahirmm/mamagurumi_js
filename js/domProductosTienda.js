const contenedorGaleriaDiv = document.getElementById("sectionModelos__Galeria__div");

  function construirTienda() {
        crearProducto(tienda);
        crearBotonComprar(tienda);
  }

  function crearProducto(tienda) {
    if (tienda) {
    for (const producto of tienda) {
      let contenedor = document.createElement("figure");
  
      contenedor.innerHTML += `<div class="flex_card cardFigureTienda">
                <img src=${producto.imagen} alt="${producto.nombre}" class="${producto.class} imgCardFigureTienda">
                <div id="botonesBajoFigure_${producto.id}">
                    <button type="button" class="btn btn-primary btn-light btn-outline-dark botonCaracteristicas" data-bs-toggle="modal" data-bs-target="#${producto.modal}">
                         ${producto.nombre}
                    </button>
                </div>
                <div class="modal fade" id="${producto.modal}" tabindex="-1" aria-labelledby="${producto.modalLabel}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="${producto.modalLabel}"><strong>${producto.nombre}</strong></h5>
                        </div>
                        <div class="modal-body">
                            <ul class="listaSinCosito">
                                <li><strong>Id nº:</strong> ${producto.id}.</li>
                                <li><strong>Medidas:</strong> ${producto.alto} x ${producto.ancho} cm.</li>
                                <li><strong>Material:</strong> ${producto.material}.</li>
                                <li><strong>Colores disponibles:</strong> ${producto.colores}.</li>
                                <li><strong>Autora del patrón:</strong> ${producto.autora}.</li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="botonComprar${producto.id}" class="btn btn-secondary colorBotonCerrarModal" data-bs-dismiss="modal">Comprar</button>
                            <button type="button" class="btn btn-secondary colorBotonCerrarModal" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>`;

        contenedorGaleriaDiv.appendChild(contenedor);

        let botonComprar = document.getElementById("botonComprar" + producto.id);
        
        botonComprar.onclick = () => {
          agregarAlCarrito(producto.id);
        }
    }
  }};

  function crearBotonComprar(tienda) {
if (tienda){
    tienda.forEach(producto => {
        $("#botonesBajoFigure_" + producto.id).append(`<button id="botonComprar_${producto.id}" class="btn btn-primary btn-light btn-outline-dark botonComprarChico">
                        <img src="../assets/carrito-de-compras.svg" alt="" class="logoCarrito">
                      </button>`);

        $("#botonComprar_" + producto.id).click(function () {
            agregarAlCarrito(producto.id);
            abrirSnackBar(producto.nombre);
        })
    });
}
  }

