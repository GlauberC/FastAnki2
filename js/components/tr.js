function criarLinha(frase, verso){
    var tr = document.createElement("tr");
    tr.ontent = frase;
    tr.classList.add("tabela-linha");
    var tdFrente = document.createElement("td")
    tdFrente.textContent = frase;
    var tdVerso = document.createElement("td")
    tdVerso.textContent = verso;
    tdFrente.classList.add("tabela-dado");
    tdFrente.classList.add("frente");
    tdVerso.classList.add("tabela-dado");
    tdVerso.classList.add("verso");
    tr.appendChild(tdFrente);
    tr.appendChild(tdVerso);
    document.querySelector(".tabela-frases").appendChild(tr);



}
function criaVerso (gramatica, fonetica, definicao){
    var verso = "";
    if(gramatica == ""){
        verso = definicao;
    }else if(fonetica == ""){
        verso = gramatica + " - " + definicao;
    }else{
        verso = fonetica + " - " + gramatica + " - " + definicao
    }
    return verso;
}

function adicionarNaTabela(){
    document.querySelector(".tabela").classList.remove("invisivel");
    var lis = document.querySelectorAll(".li-lista");
    document.querySelector(".btn-arquivo").classList.remove("invisivel");
    lis.forEach(function(li){
        var frase = li.querySelector(".frase").value;
        var fonetica = li.querySelector(".descricao-fonetica").value;
        var gramatica = li.querySelector(".gramatical").value;
        var definicao = li.querySelector(".definicao").value;
        var verso = criaVerso(gramatica, fonetica, definicao);
        criarLinha(frase, verso);
    });

}