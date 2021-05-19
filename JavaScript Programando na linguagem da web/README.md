# JavaSrcipt

## document
- document é a representação do DOM para o JS. Permite trabalharmos com elemento do HTML no JS;

## querySelector
- Trabalha com elemento no HTML
- Sintaxe: document.querySelector("tag");
- Exemplo: document.querySelector("h1");

## Boa Prática
- Dar uma classe ou id para todo elemento HTML, desta forma, caso o HTML sofra algum update e a tag passe a não existir mais, continuamos manipulando seu conteúdo através da class/id;
    - Exemplo html: <h1 class="nomeclass">Exemplo</h1>
    - Sintaxe JS: var nome_variavel = document.querySelector("seletorCSS");
    - Exemplo JS: var titulo = document.querySelector(".titulo")
### Separar arquivo JS
- Final do Body(Pois o navegador interpreta o HTML de cima para baixo);
- Sintaxe: <script src="pasta/nome.js"></script>

## .value
- usar o valor atribuido a tag referênciada: 
- Sintxe: document.querySelector("tag").value; 
- Exemplo: document.querySelector("h1").value; 

## .textContent
- Seleciona o contúdo string dentro de uma tag HTML e alterar seu valor;
Sintaxe: var nome_variavel = document.querySelector("tag");
            nome_variavel.textContent = novoValor  

## atribuir valor DOM a uma variável JS
- Sintaxe: var nome_variavel = document.querySelector("tag").value

## validação 

### if
- if (variável condição valor){
    bloco de execução;
}

### || &&
- || == ou;
- && == e;

## document.querySelectorAll
- Usado para quando quisermos buscar todos o elementos com o mesmo nome de classe ou id

## for
- Sintaxe: for(var i = 0; i < limite.lenght; i++){}

## Math.round()
- Arrendonda números com casas decimais;

## .toFixed()
- Define a quantidade de casas decimais da variável indicada
- Sintaxe: variável.toFixed(qtda_casa_decimais);

## .style.backgroundColor = ""
- Alterações no css dentro do js usando .style
- Sintaxe: var-puxou-calsse.style.alteração = ""

### CammelCaso atributos Css no JS
- Para atribuirmos algum estilo a um elemento css direto no js, na declaração, deve-se respeitar o cammelCase. 
- Diferente da declaração em uma folha css, no js o elemento segue sintaxe cammelCase;
- Sintaxe css: .class{ background-color: grey} 
- Sintaxe js: variável.style.backgroundColor = "grey"; 
- NÃO É UMA BOA PRÁTICA ALTERAR ESTILO DIRETO NO JS. Recomenda-se o uso do .classList, assim atribuindo uma classe ao elemento armazenado na variável

## .classList
- Retorna todas as classes de um objeto e métodos;
### .classList.add()
- Atribui a uma variável no js uma classe, dessa forma possíbilita a manipulação de estilo no css

## .addEventListener(evento, function)
- Js interpreta a ação executada pelo usuário (pode ser um click, scrolldown...) no navagar e atribui algum bloco de execução a este evento.
- Exemplo: .addEventListener("click", chama_funcao). Veja que ao chamar a função, não colocamos o "()", pois se usá-lo, estaremos chamando o retorno da mesma;

### Esta função pode ser nomeda ou anônima
- função nomeada é aquela criada em scopo global
- função anônima, é a criada junto ao scopo do evento:
    - Exemplo: .addEventListener("click", function(){});

### event.preventDefault()
- Botões de enviar dentro de formulários, por padrão recaregão a página ao acionar o evento;
- Remover comportamentos padrões, usamos a function preventDefault();
- deve-se passar como parâmetro da função "event"

## Form
- Usar o valor de uma input em uma form:
    - Criar um id para form;
    - Vincular a form a uma variável no js: var nomevar = document.querySelector("#id_da_form");
    - No html, criar um name para cada input:
     - ex:
~~~ html 
      <form id="addrow">
	<div class="grupo">
		<label for="nome">Nome:</label>
		<input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" class="campo">
	</div>
	<div class="grupo">
		<label for="peso">Peso:</label>
		<input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio">
	</div>
~~~
- Acessar o valor de cada input através da variável que foi agragada a form:
~~~ JavaScript
    form.name.value;
~~~ 
    
- Criar uma variável que receba o valor do input:
~~~ JavaScript
    var recebeNome = form.name.value;
~~~
    
## createElement
- Cria um elemento no HTML. Ex: Usando caso queira criar uma linha em uma tabela, com novos dados inseridos pelo usuário;

## appendChild()
- push textContent como filho da tag referênciada;
- Ex: 
~~~ JavaScript
    var form = document.querySelector("#addrow");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value

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

~~~
