// Cliente Banco que cadastrar cliente e criar contas correntes;

// Javascript o gerenciador de pacotes mais utilizado é o NPM – Node package manager.
//Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele.
// terminal --> npm init para criar o package.jason
// Correção de erro ao separar as classes por arquivos e tentar exportar. Trabalhando com módulo. "type" : "module"


import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";


// construtor declarado dentro da classe. Construtor é o que bloco o que será realizado ao chamar a classe;
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


//console.log (cliente1);
//console.log (cliente2);


const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);


conta1.depositar(500);


let valor = 200;
conta1.transferir(valor, conta2);
//console.log(cliente2);
console.log(conta1);
console.log(conta2);
console.log (ContaCorrente.numeroDeContas);



//contaCorrenteRicardo.depositar(1000);


//const valorSacado = contaCorrenteRicardo.sacar(50); // passa 50 como parâmetro para valor;
//console.log(valorSacado);
//console.log(contaCorrenteRicardo);








