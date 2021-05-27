import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //static: faz o atributo ser gobal da classeContaCorrente e não da nova classe;
    agencia;

    _cliente;
    _saldo = 0;




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
 

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; // acessar atributo estático da classe;
    }


    sacar(valor){                   // método "sacar" recebe um valor ao ser chamado;
        if(this._saldo >= valor){       
                                    //this == essa: contaCorrenteRicarodo.sacar(50) --> this == contaCorrenteRicardo;
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Saldo insuficiente");
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