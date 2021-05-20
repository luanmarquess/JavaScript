var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Bucando-pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("get",  "https://api-pacientes.herokuapp.com/pacientes");
    //  open == abre a conexão
    // tipo de requisição == get
    // onde == endereço

    
    xhr.send();
    // envia a requisição. "acessa os dados disponíveis no endereço informado"

    xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax");
    // atribui o status a uma variável para trabalhar com sua exibição

    if(xhr.status == 200){
    // se o status == 200 ou seja, obteve êxito

        erroAjax.classList.add("invisivel");
        // adiciona a classe invisível que está definida com display: none;

        // quando carregar a url, executa uma função
        var resposta = xhr.responseText;
        // xhr.responseText atribui a variável resposta o que encontrou na api
        var pacientes = JSON.parse(resposta);
        // atribui a variável pacientes um o json pego na api, transformando ele para um array
        pacientes.forEach( function(paciente){
        // for para separar cada objeto;
            adicionaPacienteNaTabela(paciente);
        // função de tratamento de dados de um array para construção da tabela
        });

    }else{
        erroAjax.classList.remove("invisivel");
        // exibe mensagem de erro no html, removendo o display none atribuido a classe invisível;
        console.log(xhr.status);
        // exibe o status (404...)
        console.log(xhr.responseText);
        // exibe o erro
    }
        
    

    });
    
});