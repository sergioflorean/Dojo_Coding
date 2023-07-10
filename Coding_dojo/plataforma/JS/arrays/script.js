var compras = [12.7, 34.5, 34.5, 54.4, 453, 34.5, 45, 94.9, 34.4, 34, 5, 45.4, 34.6, 76.5]

/* console.log("hola: " + compras[3])

var numerodecompras = compras.length;

console.log(numerodecompras)

var ultimacompra = compras[numerodecompras - 2]

console.log(ultimacompra) */

var total = 0;
for (var i = 0; i < compras.length; i++) {
    total += compras[i]
   /*  total = total + compras[i] */
}

console.log(total)

compras.push(555);

console.log(compras)

compras.pop()

console.log(compras)

compras[3] = 5

console.log(compras)

console.log(compras.length)

compras.pop()

console.log(compras.length)
