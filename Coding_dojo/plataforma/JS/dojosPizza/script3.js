var pizza = {
    tipoCorteza: ["estilo chicago", "lanzada a mano", "sarten"],
    tipoSalsa: ["marinara","traidicional", "poblana"],
    quesos: ["parmesano", "gouda", "provolon", "mozzarella"],
    ingredientes: ["pepperonni", "salchicha", "champiñones", "aceitunas", "cebolla", "jalapeño"]
};


function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

var pizza1 = pizzaOven(pizza.tipoCorteza[0], pizza.tipoSalsa[1], pizza.quesos[3], pizza.ingredientes[0,1,0]);

console.log(pizza1)

var pizza2 = pizzaOven(pizza.tipoCorteza[1], pizza.tipoSalsa[0], pizza.quesos[2], pizza.ingredientes[0,1]);

console.log(pizza2)
