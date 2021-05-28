var pacientes = document.querySelectorAll(".paciente"); 

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    console.log(paciente) //tr
    console.log(peso) // td
    console.log(altura)// apenas o conteúdo texto da variável
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso); // true or false 
    var alturaValida = validaAltura(altura);
    
    
    if (!pesoValido){
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida){
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

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00 ){
        return true;
    }
    else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


