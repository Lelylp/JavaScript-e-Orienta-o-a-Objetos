let banco = {
    conta:"721837-5",
    saldo:0,
    tipoConta:"Pessoa fisica",
    agencia:"8823",

    buscarSaldo() {
        console.log(this.saldo); 
    },

    deposito(num) {
        this.saldo += num
    },

    saque(num) {
        if (num<saldo) {
            this.saldo -= num 
        }else{
            console.log("money insuficiente");
        }
    },

    numConta() { 
        console.log(this.numConta);
    }

}