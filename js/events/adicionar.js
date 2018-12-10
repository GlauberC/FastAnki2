document.querySelector(".btn-palavra-nova").addEventListener("click", adicionarFrasePalavraNova)

document.querySelector(".btn-repete-palavra").addEventListener("click", adicionarFrasePalavraRepetida)

document.querySelector(".btn-tabela").addEventListener("click", adicionarNaTabela);

document.addEventListener("keydown",function(event){
    var teclaCtrl = event.ctrlKey;
    var teclaApertada = event.keyCode;
    if(teclaCtrl && teclaApertada == 32){
        adicionarFrasePalavraRepetida();
    }else if(teclaCtrl && teclaApertada == 13){
        adicionarFrasePalavraNova();
    }
    
});


function adicionarFrasePalavraNova(){
    var ul = document.querySelector(".ul-lista");    
    var li = criaLi();
    numero++;
    ul.appendChild(li);

}
function adicionarFrasePalavraRepetida(){
    var ul = document.querySelector(".ul-lista"); 
    var liAnterior = ul.querySelector("li:last-child");   
    var li = criaLi();

    numero++;
    
    var descricaoFonetica = liAnterior.querySelector(".descricao-fonetica").value
    li.querySelector(".descricao-fonetica").value = descricaoFonetica;

    var descricaoFonetica = liAnterior.querySelector(".gramatical").value
    li.querySelector(".gramatical").value = descricaoFonetica;
  
    var descricaoFonetica = liAnterior.querySelector(".definicao").value
    li.querySelector(".definicao").value = descricaoFonetica;

    ul.appendChild(li);
    
    console.log(liAnterior.querySelector(".frase").value);
}

// Clicar e copiar
document.querySelector(".tabela-frases").addEventListener("click",function(event){
    event.target.classList.add("clicado");
    var textoClicado = event.target.textContent;
    var inputTemp = document.querySelector(".temp")
    inputTemp.classList.remove("invisivel")
    inputTemp.value = textoClicado;
    inputTemp.select();
    document.execCommand('copy');
    inputTemp.classList.add("invisivel")    
});

  document.querySelector(".btn-arquivo").addEventListener("click", function(event){
    var text = tabelaToCsv();
    download("anki", text)
  });
