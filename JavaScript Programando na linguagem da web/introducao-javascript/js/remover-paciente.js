var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target; // TD
    var paiDoAlvo = alvoEvento.parentNode; // TR
     event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){

        paiDoAlvo.remove();
    },500);
    
});


/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
})
*/