//clase ninja

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strenght = 3;
    }


    sayName = () => {

        console.log(`Nombre de Ninja: ${this.name}`)
    }

    showStats = () => {
        console.log(`Ninja es: 
    name:${this.name}
    health:${this.health}
    spreed:${this.speed}
    strenght:${this.strenght}`)
    }

    drinkSake = (healthCharge) => {
        this.health += healthCharge
       // console.log(`your health is ${this.heatlh}`)

    }
}
// clase sensei 

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.speed = 10;
        this.strenght = 10;
        this.sabiduria = 10;
    }

    childFunction = () => {
        const message = sensei1.parentFunction()
        console.log(message)
    }

    speakWisdom = () => console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses')

    showStats = () =>{
        console.log(`~ Sensei ~
        Nombre: ${this.name}
        Fuerza: ${this.strenght}
        Velocidad: ${this.speed}
        Salud: ${this.health}
        Sabiduria: ${this.sabiduria}`)
    }
}


const ninja1 = new Ninja("hyabusa", 0);


ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(10);


const sensei1 = new Sensei("splinter");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.drinkSake(10);




