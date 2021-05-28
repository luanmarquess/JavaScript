// Cliente Banco que cadastrar cliente e criar contas correntes;

// Javascript o gerenciador de pacotes mais utilizado é o NPM – Node package manager.
//Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele.
// terminal --> npm init para criar o package.jason
// Correção de erro ao separar as classes por arquivos e tentar exportar. Trabalhando com módulo. "type" : "module"


import{Cliente} from "./Conta/Cliente.js";
import{ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import{Gerente} from "./Funcionarios/Gerente.js";
import{Diretor} from "./Funcionarios/Diretor.js";
import{SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567890);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const cliente = new Cliente("Lais", 78945612379, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);




// construtor declarado dentro da classe. Construtor é o que bloco o que será realizado ao chamar a classe;
/*const cliente1 = new Cliente("Ricardo", 11122233309);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaPoupanca);
console.log(cliente1); */
















