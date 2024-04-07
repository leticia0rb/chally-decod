var botaoCopiar = document.querySelector(".botoes-v"); 

botaoCopiar.addEventListener('click', function() {
    var textoParaCopiar = document.querySelector(".container-quadro-resultado-mensagem");
    if (textoParaCopiar.value.length > 0) { 
        navigator.clipboard.writeText(textoParaCopiar.value)
            .then(() => {
                console.log('Texto copiado para a área de transferência');
            })
            .catch(err => {
                console.error('Erro ao tentar copiar o texto: ', err);
            });
    }
});

