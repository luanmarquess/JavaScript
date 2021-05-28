
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //static: faz o atributo ser gobal da classeContaCorrente e não da nova classe;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);         // super chama o construtor da classe pai
        ContaCorrente.numeroDeContas += 1; // acessar atributo estático da classe;
    }

    // declarar o método sacar dentro da classe ContaCorrente, parar sobrescrever o método sacar declarado na classe mãe "Conta", pois a taxa é diferente;
    sacar(valor){      
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}