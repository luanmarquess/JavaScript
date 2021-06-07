class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document); // bind mantém a associação com o document ao chamar a função querySelector;
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negocicacoesView = new NegociacoesView($('#negociacoesView'));
        this._negocicacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event){

        event.preventDefault(); // Previne Reload
           
       this._listaNegociacoes.adiciona(this._criaNegociacao());
       this._negocicacoesView.update(this._listaNegociacoes);
       
       this._mensagem.texto = 'Negociação adicionada com sucesso!';
       this._mensagemView.update(this._mensagem);

       this._limpaFormulario();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
    
    
    // let data = new Date(this._inputData.value.split('-')); // passa um array para o date;

    // Por padrao o mes no Date() comeca 0 == jan..., para resolver esse problema
    // let data = new Date(...
    //     this._inputData.value
    //     .split('-')
    //     .map(function(item, indice) {
    //         if(indice == 1){
    //             return item - 1;
    //         }
    //         return item
    //     })
    // );

    // ... spread operator == primeiro item do array == primeiro item passado para function...
    // => arrow function: substitui a palavra "function" e quando se tem uma única instrução, a mesma já faz o return;

//.toLocaleDateString("pt-br") == formata a data recebida pelo Date para dd/mm/yyyy;