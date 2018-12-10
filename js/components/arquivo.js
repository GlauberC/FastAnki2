function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  function tabelaToCsv(){
    var linhas = document.querySelectorAll(".tabela-linha");
    var csv = "";
    linhas.forEach(function(linha){
        csv = csv + linha.querySelector(".frente").textContent + "\t";
        csv = csv + linha.querySelector(".verso").textContent + "\n";
    });
    return csv;
  }
  