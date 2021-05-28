// Classe abstrata. Este tipo de classe s serve para ser herdada;
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){ // contrutor inicialmente chamado é o Conta. Inibe a criação de conta diretamente por essa classe.  
            throw new Error("Para instaciar uma conta, expecifique qual tipo ela será: ContaPoupança, ContaCorrente... pois a classe Conta é abstrata;")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }



    set cliente(novoValor){     // protege o atributo cliente para poder receber apenas variáveis que possuém a classe Cliente guardadas;
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
                        //#saldo = 0; # torna o atributo privado. Não pode ser acessado ou usado por nenhuma outra classe; Só pode ser acessado dentro de sua própria classe; # Ainda não foi implementado no JS https://github.com/tc39/proposal-class-fields

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
                        // por convenção, atributos com "_" são considerados privados e não devem ser manipulados fora da classe.(Mesmo sendo possível).



    // Método abstrato. Cada tipo de conta deve sobrescrever pois a taxa difere.
    sacar(valor){      
        throw new Error("O método sacar é abastrato");
    }


    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){       
            this._saldo -= valorSacado;
            return valorSacado;
        }else{
            console.log("Saldo insuficiente");
            return 0;
        }
    }


    depositar(valor){
        if(valor > 0){              // if(valor <= 0) return -- early return. Torna o código mais legível;
            this._saldo += valor;   // this._saldo += valor;
        }else{
            console.log("Valor Inválido");
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        //this.sacar(valor);        //outra maneira de resolver o mesmo método.
        //conta.depositar(valor);   // NECESSITA RETIRAR O RETURN VALOR DO MÉTODO SACAR();
    }
    
}