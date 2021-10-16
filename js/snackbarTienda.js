
  function abrirSnackBar(nombre) {
    let componenteSanck =  $("#snackbar")

    
    componenteSanck.prepend(`<h5>Producto agregado al carrito: ${nombre}</h5>`);

    componenteSanck.addClass("show");

    setTimeout(function() { 
        componenteSanck.removeClass("show");
        componenteSanck.html("")
    }, 3000);
}