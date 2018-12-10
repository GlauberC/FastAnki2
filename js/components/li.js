
var numero = 2;

function criaLi(){
    var li = document.createElement("li");
    li.classList.add("li-lista");

    var linhaGeral = criaLinha();

    var spanNumero = document.createElement("span");
    spanNumero.textContent = numero;
    spanNumero.classList.add("col-lg-1");

    var divFrase = document.createElement("div");
    divFrase.classList.add("col-lg-11");

    var linhaFrase = criaLinhaFrase();
    var linhaDefinicao = criaLinhaFoneticaGramaticaDefinicao()

    divFrase.appendChild(linhaFrase)
    divFrase.appendChild(linhaDefinicao)
    
    linhaGeral.appendChild(spanNumero);
    linhaGeral.appendChild(divFrase);
    
    li.appendChild(linhaGeral)
    

    return li;    
}


function criaLinha(){
    var linha = document.createElement("div");
    linha.classList.add("row");
    return linha;
}
function criaInput(classe, placeholder){
    var input = document.createElement("input");
    input.type = "text"
    input.placeholder = placeholder;
    input.classList.add("form-control");
    input.classList.add(classe);
    return input;
}
function criaSelect(lista, classSelect){
    var select = document.createElement("select");
    select.classList.add("form-control")
    select.classList.add(classSelect)
    lista.forEach(function(opcao){
        var option = document.createElement("option");
        option.textContent = opcao;
        select.appendChild(option);
    });
    return select;
}
function criaLinhaFrase(){
    var linhaFrase = criaLinha();
    var inputFrases = criaInput("frase", "Frases para adicionar")
    linhaFrase.appendChild(inputFrases);
    return linhaFrase;
    
}
function criaLinhaFoneticaGramaticaDefinicao(){
    var linhaDefinicao = criaLinha();

    var inputDescricaoFonetica = criaInput("descricao-fonetica","Descrição fonética");
    inputDescricaoFonetica.classList.add("col-lg-2");

    var listaGramatica = [" ", "Noun", "Verb", "Adj", "Adv", "Conj", "Prep", "PV", "MV"];
    var selectGramatica = criaSelect(listaGramatica, "gramatical")
    selectGramatica.classList.add("col-lg-2");

    var inputDefinicao = criaInput("definicao", "Definição ou tradução");
    inputDefinicao.classList.add("col-lg-8");

    linhaDefinicao.appendChild(inputDescricaoFonetica);
    linhaDefinicao.appendChild(selectGramatica);
    linhaDefinicao.appendChild(inputDefinicao);

    return linhaDefinicao;
}



