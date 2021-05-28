var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){ 
    event.preventDefault();
    console.log("botao está funcionando");

    var form = document.querySelector("#addrow");
    var paciente = valoresInputNovaLinha(form);

    pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
        
    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    // Adicionando o paciente na tabela
    
    adicionaPacienteNaTabela(paciente);
   

    form.reset();

    // Limpa o Form e Limpa as mensagens de erro
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
 
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    // armazena a linha monstada
    var tabela = document.querySelector("#tabela-pacientes");
    // armazena a tabela principal
    tabela.appendChild(pacienteTr);
    // adiciona a linha criada como filho da tabela principal;
}

// Caso haja erros
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
/*      for (var i = 0; i < erros.length; i++){
        var erro = erros[i];
        }*/
}

function valoresInputNovaLinha(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,  
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
// cria uma linha/
// atribui uma classe;
// atribui uma td como filho da tr criada, passando classe do objeto;
// retorna a tr com suas respectivas td's.
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0){

        erros.push("Nome Inválido ou em branco");
    }
    if(!validaPeso(paciente.peso)){

        erros.push("O peso é inválido");
    }

    if (!validaAltura(paciente.altura)){

        erros.push("A altura é inválida");
    }
    if (paciente.gordura.length == 0){

        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length == 0){

        erros.push("Preencha o campo peso");
    }
    if (paciente.altura.length == 0){

        erros.push("Preencha o campo altura");
    }
   

    return erros;
}