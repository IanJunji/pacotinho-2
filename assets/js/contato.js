function verificar(event){
    event.preventDefault();

    var input_nome = document.querySelector("#nome_contato").value
    var input_telefone = document.querySelector("#tel").value
    var input_email = document.querySelector("#email").value
    var input_textarea = document.querySelector("#mensagem").value

    if(input_nome.length < 2){
        alert('Seu nome deve conter no mínimo três letras!')
        return;
    }
    if(input_telefone === "" || input_email === "" || input_textarea === ""){
        alert("Nenhum campo pode ficar vazio!")
        return;
    }
    else{
        alert(`Formulário preenchido com sucesso!
            Nome: ${input_nome}
            Telefone: ${input_telefone}
            E-mail: ${input_email}
            Mensagem: ${input_textarea}`)
        location.reload()
    }

}
