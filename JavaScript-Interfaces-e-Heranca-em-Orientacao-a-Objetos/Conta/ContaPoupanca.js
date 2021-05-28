import { Conta } from "./Conta.js";

// extends: class ContaPoupança herda todas as propriedades e métodos da classe Conta;
// super: referencia a classa mãe que nesse caso é class Conta;

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa); 
        
    }
}