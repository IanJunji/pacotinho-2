document.getElementById("btnSend").addEventListener("click", function(event) {
    verificar();
});

function verificar(){
    console.log("Chamada de verificação");

    var nome = document.getElementById("name").value;
    var telefone = document.getElementById("tel").value;
    var email = document.getElementById("e-mail").value;
    var assuntos = document.querySelector("assunto").value;
    var mensagem = document.getElementById("mensagens").value;

    if (nome.length < 2) {
        alert('O nome deve possuir no mínimo 2 caracteres!');
        return false;
    }

    if (telefone === '') {
        alert('Este campo deve ser preenchido!');
        return false;
    }

    if (email === '') {
        alert('Este campo deve ser preenchido!');
        return false;
    }

    if (assuntos === '') {
        alert('Selecione um dos assuntos!');
        return false;
    }

    if (mensagem === '') {
        alert('Este campo deve ser preenchido!');
        return false;
    }

    alert("Enviado com sucesso!\n" +
        "\nNome:" + nome +
        "\nTelefone:" + telefone +
        "\nEmail:" + email +
        "\nAssunto" + assuntos +
        "\nMensagem" + mensagem);
    
    return false;

}

