alert(`Bienvenido a Donatto`);
class Talita {
  constructor(sabor) {
    this.precio = 600;
    this.sabor = sabor.toUpperCase();
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}

const original = new Talita("original");
const jamon = new Talita("jamon");
const queso = new Talita("queso");
const oregano = new Talita("oregano");
const cebolla = new Talita("cebolla");

function pedirCantidad(tipo) {
  respuesta = parseInt(
    prompt(
      `¿Cuántas talitas de ${tipo} vas a querer?\nIngresa un valor numérico`
    )
  );

  while (Number.isInteger(respuesta) == false) {
    respuesta = parseInt(
      prompt(
        `INGRESA UN VALOR VÁLIDO\n¿Cuántas talitas de ${tipo} vas a querer?\nIngresa un valor numérico`
      )
    );
  }
  return respuesta;
}

let cantidadOriginal = pedirCantidad(original.sabor);
let cantidadJamon = pedirCantidad(jamon.sabor);
let cantidadQueso = pedirCantidad(queso.sabor);
let cantidadOregano = pedirCantidad(oregano.sabor);
let cantidadCebolla = pedirCantidad(cebolla.sabor);

function pushearResumen(saborObjecto, cantidades) {
  if (cantidades != 0) {
    return resumen.push(`${saborObjecto}: ${cantidades} unidades`);
  }
}

let resumen = [];

pushearResumen(original.sabor, cantidadOriginal);
pushearResumen(jamon.sabor, cantidadJamon);
pushearResumen(queso.sabor, cantidadQueso);
pushearResumen(oregano.sabor, cantidadOregano);
pushearResumen(cebolla.sabor, cantidadCebolla);

console.log(`    \nResumen de Compra\n     `);

for (producto of resumen) {
  console.log(producto);
}

let subtotal =
  original.precio * cantidadOriginal +
  jamon.precio * cantidadJamon +
  queso.precio * cantidadQueso +
  oregano.precio * cantidadOregano +
  cebolla.precio * cantidadCebolla;

console.log(` \nSubtotal sin IVA: $${subtotal}\n `);

original.sumarIva();
jamon.sumarIva();
queso.sumarIva();
oregano.sumarIva();
cebolla.sumarIva();

let total =
  original.precio * cantidadOriginal +
  jamon.precio * cantidadJamon +
  queso.precio * cantidadQueso +
  oregano.precio * cantidadOregano +
  cebolla.precio * cantidadCebolla;

console.log(` \nTotal: $${total}\n `);
