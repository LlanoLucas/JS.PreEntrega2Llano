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

let cantidades = [
  pedirCantidad(original.sabor),
  pedirCantidad(jamon.sabor),
  pedirCantidad(queso.sabor),
  pedirCantidad(oregano.sabor),
  pedirCantidad(cebolla.sabor),
];

function pushearResumen(saborObjecto, cantidades) {
  if (cantidades > 0) {
    return resumen.push(`${saborObjecto}: ${cantidades} unidades`);
  }
}

let resumen = [];

pushearResumen(original.sabor, cantidades[0]);
pushearResumen(jamon.sabor, cantidades[1]);
pushearResumen(queso.sabor, cantidades[2]);
pushearResumen(oregano.sabor, cantidades[3]);
pushearResumen(cebolla.sabor, cantidades[4]);

console.log(`    \nResumen de Compra\n     `);

resumen.forEach((element) => {
  console.log(element);
});

let subtotal = cantidades.reduce(
  (acumulador, cantidades) => acumulador + cantidades * original.precio,
  0
);

console.log(` \nSubtotal sin IVA: $${subtotal}\n `);

original.sumarIva();
jamon.sumarIva();
queso.sumarIva();
oregano.sumarIva();
cebolla.sumarIva();

let total = cantidades.reduce(
  (acumulador, cantidades) => acumulador + cantidades * original.precio,
  0
);

console.log(` \nTotal: $${total}\n `);
