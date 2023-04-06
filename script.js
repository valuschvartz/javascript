const PRECIO_PRODUCTO_1 = 20;
const PRECIO_PRODUCTO_2 = 30;

let carrito = [];
let total = 0;

function agregarAlCarrito(precio) {
  const productoExistente = carrito.find(p => p.precio === precio);

  if (productoExistente) {
    productoExistente.cantidad++;
    total += precio;
  } else {
    carrito.push({ precio, cantidad: 1 });
    total += precio;
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoElement = document.getElementById("carrito");
  const listaElement = carritoElement.getElementsByTagName("ul")[0];
  const totalElement = document.getElementById("total");

  listaElement.innerHTML = "";
  carrito.forEach(producto => {
    const liElement = document.createElement("li");
    liElement.textContent = `$${producto.precio} x ${producto.cantidad}`;

    listaElement.appendChild(liElement);
  });

  totalElement.textContent = `$${total}`;
}
