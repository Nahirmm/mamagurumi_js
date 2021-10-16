const URLJSON = "../data/productos.json"

function obtenerProductos () {

    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
          tienda = respuesta.tienda
          construirTienda()
        }
        });
      }

let tienda = [];

obtenerProductos()

console.log(tienda);

