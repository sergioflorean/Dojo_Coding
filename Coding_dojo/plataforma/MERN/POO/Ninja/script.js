//clase ninja

class Ninja {
    constructor(name, health, speed, strenght) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strenght = 3;
    }
}

function sayName() {
    let name = "felipe";
    console.log(`Nombre de Ninja: ${this.name}`)
}

function showStats(){
    console.log(`ninja es 
    name:${this.name}
    healt:${this.health}
    spreed:${this.spped}
    strenght:${this.strenght}`)
}

function drinkSake(){
    this.health += 10;
    console.log(`your health is ${this.heatlh}`)

}


sayName()
showStats()
drinkSake()


