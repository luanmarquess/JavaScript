var pacientes = document.querySelectorAll(".paciente"); 

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    console.log(paciente) //tr
    console.log(peso) // td
    console.log(altura)// apenas o conteúdo texto da variável
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = true;
    var alturaValida = true;
    
    
    if (peso <= 0 || peso >= 500){
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.00){
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2); // atribui ao elemento html o valor da variável imc
    }
    console.log(imc);

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");




botaoAdicionar.addEventListener("click", function(event){ 
    event.preventDefault();

    console.log("botao está funcionando");

    var form = document.querySelector("#addrow");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    altura.textContent = altura;
    gordura.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

   var tabela = document.querySelector("#tabela-pacientes");
   
   tabela.appendChild(pacienteTr);
});

console.log(botaoAdicionar);

