class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, resilience, power) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
        
    }

    attack(target) {
        //reduce target res by power
        target.resilience -= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitud) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resiliencia") {
                // console.log(this.text)
                if (this.text.includes('Aumentar')) {
                    target.resilience = target.resilience += this.magnitud
                } else {
                    target.resilience = target.resilience -= this.magnitud
                }
            } else {
                target.resilience = target.power += this.magnitud
            }
        } else {
            throw new Error("El objetivo debe ser una Unidad!")
        }
    }
}



const unitCard1 = new Unit("ninja cinturon rojo", 3, 3, 4)
const unitCard2 = new Unit("ninja cinturon negro", 3, 3, 4)

const effectCard1 = new Effect("Algoritmo Dificil", 2, "aumentar la resistencia del objetivo en 3", "resilencia", 3)
const effectCard2 = new Effect("Rechazo de promesa no manejad", 1, "aumentar la resistencia del objetivo en 2", "resilencia", -2)
const effectCard3 = new Effect("Programacion en pareja ", 2, "aumentar la resistencia del objetivo en 2", "resilencia", 3)




class player {
    constructor(name, idPlayer){
        this.name = name;
        this.idPlayer = idPlayer;
    }

    summon (card,idPlayer){
        if (idPlayer == 1){
            console.log(`jugador 1 a jugador ${card}`)
        } else{
            console.log(`jugar 2 a jugador ${card}`)
        }
    }
  
}

const player1 = new player("sergio", 1)
const player2 = new player("ramiro", 2)

player1.summon(unitCard1.name, player1.idPlayer)
effectCard1.play(unitCard1)
console.log(unitCard1)
player2.summon(unitCard2.name, player2.idPlayer)
effectCard2.play(unitCard1)
console.log(unitCard1)
effectCard3.play(unitCard1)
console.log(unitCard1)
unitCard1.attack(unitCard2)
console.log(unitCard2)