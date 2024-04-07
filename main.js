function validaMensagem(mensagem) {
    var erros = [];

    if(mensagem.value == 0) erros.push("Digite alguma mensagem!");

    if(/[A-Z-À-Ú-à-ú]/.test(mensagem.value)) erros.push("Sua mensagem deve conter apenas letra minúscula sem acentuação.");

    return erros;
}

function mostraErros(erros) {
    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    })

}


function condifica(mensagem) {
    var codigo = mensagem.value.split("");

    codigo.forEach(function(item, i) {
        if(item == "a") {
            codigo[i] = "wa";

        } else if(item == "e") {
            codigo [i] = "hei";

        } else if(item == "i") {
            codigo [i] = "lin";
        
        } else if(item == "o") {
            codigo [i] = "mon";

        } else if(item == "u") {
            codigo [i] = "woo";
        }
    });

    return codigo.join("");
    
}

function decodifica(mensagem) {
    var codigo = [["a", "wa"],["e", "hei"], ["i", "lin"], ["o", "mon"], ["u", "woo"]];
    mensagem = mensagem.value;

    for(var i = 0; i < codigo.length; i++) {
        if(mensagem.includes(codigo[i][1])) {
            mensagem = mensagem.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }

    return mensagem;
}


function escondeImagem() {
    var imagemResultado = document.querySelector(".container-quadro-resultado-imagem");
    imagemResultado.style.display = 'none'; // Esconde a imagem
}

function escreveCodificado() {
    var botaoCopiar = document.querySelector(".botoes-v");
    botaoCopiar.classList.remove("invisivel");

    resultado.textContent = condifica(inputMensagem);
    escondeImagem(); // Chama a função para esconder a imagem
}

function escreveDecodificado() {
    var botaoCopiar = document.querySelector(".botoes-v");

    resultado.textContent = decodifica(inputMensagem);
    escondeImagem(); // Chama a função para esconder a imagem
}


var inputMensagem = document.querySelector(".container-quadro-digitavel-input");
var resultado = document.querySelector(".container-quadro-resultado-mensagem");

var botaoCodificar = document.querySelector(".botoes-c");
var botaoDecodificar = document.querySelector(".botoes-d");

var erro = document.querySelector(".mensagem-erro");

botaoCodificar.onclick = function() {
    var erros = validaMensagem (inputMensagem);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    erro.innerHTML = "";
}


botaoDecodificar.onclick = function() {
    var erros = validaMensagem (inputMensagem);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveDecodificado();
    erro.innerHTML = "";
}

