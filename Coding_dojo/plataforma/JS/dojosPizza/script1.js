var taco1 = {
    "tortilla": "tortilla suave de maíz",
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// todavía podemos obtener toda la deliciosa información de
taco1.tacoInfo(); // nota que tacoInfo se llama como a una función aún
