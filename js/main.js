class Carrito {
  constructor() {
    this.productos = [];
  }

  crearId() {
    let max = 0;

    this.productos.forEach((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });

    return max + 1;
  }

  pushearProducto(nombre, cantidad) {
    this.precio = 600;
    this.productos.push({
      id: this.crearId(),
      nombre: nombre,
      precio: this.precio,
      cantidad: cantidad,
    });
  }

  eliminarProducto(id) {
    this.productos = this.productos.filter((prod) => prod.id != id);
  }

  cantidadProductos() {
    return this.productos.length;
  }

  valorTotal() {
    return this.productos.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  }

  valorTotalConIVA() {
    return this.valorTotal() * 1.21;
  }

  escribirResumen() {
    let resumen = "Resumen de compra\n\n";

    this.productos.forEach((element) => {
      resumen += `(${element.id}) ${element.nombre}: x${element.cantidad} unidades\n`;
    });

    return resumen;
  }
}

alert("Bienvenido a Donatto!");

let producto = "";

let cantidad = 0;

const carrito = new Carrito();

while (producto.toUpperCase() != "SEG") {
  producto = prompt(
    "¿Que talita te vas a llevar?\nOpciones: Original, Jamon, Queso, Oregano, Cebolla.\n(para seguir la compra escribe: SEG)"
  ).toUpperCase();

  if (producto.toUpperCase() == "SEG") {
    break;
  }

  while (
    producto.toUpperCase() != "ORIGINAL" &&
    producto.toUpperCase() != "JAMON" &&
    producto.toUpperCase() != "QUESO" &&
    producto.toUpperCase() != "OREGANO" &&
    producto.toUpperCase() != "CEBOLLA"
  ) {
    producto = prompt(
      "INGRESA UN VALOR VÁLIDO:\n\n¿Que talita te vas a llevar?\nOpciones: Original, Jamon, Queso, Oregano, Cebolla.\n(para seguir la compra escribe: SEG)"
    ).toUpperCase();
  }

  cantidad = parseInt(
    prompt(`Ingresá cuántas talitas de ${producto} querés llevar:`)
  );

  while (Number.isInteger(cantidad) === false) {
    cantidad = parseInt(
      prompt(
        `INGRESE UN SABOR VÁLIDO:\n\nCuántas talitas de ${producto} quiere llevar:`
      )
    );
  }

  carrito.pushearProducto(producto, cantidad);
}

if (carrito.cantidadProductos() > 0) {
  let id;

  // Eliminar Productos
  while (id != 0) {
    id = parseInt(
      prompt(
        carrito.escribirResumen() +
          "\nQuerés eliminar un producto? Ingresá su ID:\n(ESCRIBIR 0 PARA SALIR)"
      )
    );

    if (id > 0) {
      carrito.eliminarProducto(id);
    }

    if (carrito.cantidadProductos() == 0) {
      break;
    }
  }

  alert(
    `${carrito.escribirResumen()}\nSubtotal sin IVA: $${carrito.valorTotal()}\nTotal con IVA: $${carrito.valorTotalConIVA()}`
  );
} else {
  alert("No te estás llevando nada!");
}
