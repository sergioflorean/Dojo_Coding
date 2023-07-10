class BankAccount{

    constructor (rut, name, saldo, direccion){
        this.rut = rut;
        this.name = name;
        this.saldo = saldo;
        this.direccion = direccion;
        this.numberAccount = Math.random();
        this.isActive = true;
    }

    changeStatusAccount(status){
        this.isActive = status;

    }
    closeAccount(){
        this.saldo = 0;
        this.changeStatusAccount(false);

    }
    blockAccount(){

    }
   /*  transferCredit(destination, account){

    } */
    getCredit(){
        return this.saldo;

    }
    creditCharge(){
        this.saldo += credit;

    }
    creditWithdraw(credit){
        this.saldo -= credit;
    }

}