var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos)

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault(); // evita o recarregamento da página

    var tr = document.createElement('tr');
    
    campos.forEach(function(campos){
        var td = document.createElement('td');
        td.textContent = campos.value;       //td recebe o valor do input
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);


    // limpa campos e da o foco ao campo de indice 0 "data";
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus;

});