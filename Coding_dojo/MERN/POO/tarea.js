class BankAccount {

    constructor(rut, nombre, saldo, direccion) {
        this.rut = rut;
        this.nombre = nombre;
        this.saldo = saldo;
        this.direccion = direccion;
        this.numberAccount = Math.random();
        this.isActive = true;
    }

    changeStatusAccount(status) {
        this.isActive = status;
    }

    closeAccount() {
        this.saldo = 0;
        this.changeStatusAccount(false);
    }

    // transferCredit(destination, amount) {
        
    // }

    getCredit() {
        return this.saldo;
    }

    creditCharge(credit) {
        this.saldo += credit;
    }

    creditWithdraw(credit) {
        this.saldo -= credit;
    }

    /* Transfer(destination, credit){
        this.saldo SaveAccount1 -= credit;

    } */

}

class SaveAccount extends BankAccount {

    constructor() {
        super()
    }

}

const account1 = new BankAccount('11111111-1', 'Juanita Soto', 20000, 0, 'Calle Real 123, Valdivia');
const SaveAccount1 = new BankAccount('11111111-1', 'Juanita Soto', 0, 560000, 'Calle Real 123, Valdivia');


console.log(account1.saldo);
console.log(account1.rut);
console.log(SaveAccount1.saldo);

account1.creditCharge(24000);
console.log(account1.saldo);

SaveAccount1.creditCharge(24000);
console.log(SaveAccount1.saldo);



