class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
}

// class ListaNegociacoes{

//     constructor(){

//         this._negociacoes = []
//     }

//     adiciona(negociacao){
        
//         this._negociacoes.push(negociacao);
//     }

//     get negociacoes(){

//         return [].concat(this._negociacoes); // faz uma cópia da lista, previnindo modificação;
//     }
// }