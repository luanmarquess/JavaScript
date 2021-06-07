//_ == convenção para encapsulamento de uma propriedade. 
//Método == getData(){return...} == acessar os atributos privados; Ex: console.log(ni.getData());
// Getter == get data(){} == acessa o atributo privado e impossibilita sua alteração;
//Object.freeze(variável) == Torna variável imutável;
// getTime() == retorna um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.
//Objetos podem são mutáveis. Para 
// var e let no js == let deixa a variável acessível apenas no bloco na qual foi criada;
class Negociacao{

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
    }

    get volume(){

        return this._quantidade * this._valor;
    }

    get data(){

        return new Date(this._data.getTime());
    }

    get quantidade(){

        return this._quantidade;
    }

    get valor(){
        
        return this._valor;
    }
}