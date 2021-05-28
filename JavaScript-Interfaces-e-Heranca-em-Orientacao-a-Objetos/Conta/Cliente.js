// classe tem atributos/propriedades;
// export: trabalhar com módulos no js, linkando arquivos;
// declarar atributos dentro de métodos;

export class Cliente{         //classe serve como molde para rotinas repetitivas;

    // torna o atributo cpf inalterável, possibilitando apenas consula por conta do get;
    get cpf(){
        return this._cpf;
    }

    // possibilita passar parâmetros ao criar uma nova classe Cliente;
    // bloco de execução como se class cliente fosse um método que recebesse parâmetro;
    // let cliente1 = new Cliente(nome, cpf) { cliente1.nome = nomeParâmetro; cliente1.cpf = cpfParâmetro};
    constructor(nome, cpf, senha){

        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha; 

    }

    autenticar(){
        return true;
    }
}