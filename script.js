let carrito = [];
function myFunction(producto) {
    let cantidad = prompt(`¿Cuántos ${producto.nombre} desea agregar al carrito?`);
    let confirmacion = confirm(`¿Estás seguro que quieres agregar ${cantidad} ${producto.nombre} al carrito?`);
  
    if (confirmacion) {
      // Si el usuario confirma que quiere agregar la respuesta al carrito
      let subtotal = producto.precio * cantidad ;
      let productoAgregado = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
        subtotal: subtotal,
      };
      carrito.push(productoAgregado);
      let alerta = alert(`Se han agregado ${cantidad} ${producto.nombre} al carrito, su subtotal es ${subtotal}`);
    } else {
      // Si el usuario no confirma que quiere agregar la respuesta al carrito
      let alerta = alert("No se ha agregado nada al carrito");
    }
  }
  function mostrarCarrito(subtotal){
    let mensaje = "Carrito de compras:\n";
    let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    mensaje += `Producto: ${carrito[i].nombre}, Precio: ${carrito[i].precio}, Cantidad: ${carrito[i].cantidad}, Subtotal: ${carrito[i].subtotal}\n`;
    total += carrito [i].subtotal;
  }
  mensaje += `Total: ${total}`;
  let resumen = alert(mensaje);
}
  function vaciarCarrito() {
    let vaciar = confirm("Estas seguro que deseas vaciar el carrito?")
    if (vaciar) {
      // Si el usuario confirma que quiere vaciar el carrito
      carrito.splice(0, carrito.length);
     let alerta = alert("Se ha vaciado el carrito");
    } else {
      // Si el usuario no confirma que quiere vaciar el carrito
      let alerta = alert("No se ha vaciado el carrito");
    }
  }
  function confirmarCompra() {
    let mensaje = "Carrito de compras:\n";
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `Producto: ${carrito[i].nombre}, Precio: ${carrito[i].precio}, Cantidad: ${carrito[i].cantidad}, Subtotal: ${carrito[i].subtotal}\n`;
        total += carrito [i].subtotal;
    }
    mensaje += `Total: ${total}`;

    let comprar = confirm(`¿Desea confirmar su compra?\n\n${mensaje}`);
    if (comprar) {
        // El usuario confirmó la compra, se vacía el carrito
        carrito.splice(0, carrito.length);
        let alerta = alert("Gracias por su compra");
    } else {
        // El usuario canceló la compra
        let alerta = alert("Compra cancelada");
    }
  }
  

