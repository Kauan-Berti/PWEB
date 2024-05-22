function validarCampos() {

    var form = document.querySelector(".formAtividade15");
    var nome = form.querySelector(".campo_nome").value;
    var email = form.querySelector(".campo_E-mail").value;
    var comentario = form.querySelector(".campo_comentario").value;
    var visita = form.querySelectorAll(".campo_visita, .campo_visita_nao");
    var radioSelecionado = false;
    

    if (nome.length < 10) { 
        alert("Nome deve conter pelo menos 10 caracteres.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) { 
        alert("E-mail inválido, por favor preencha de forma correta!");
        return false;
    }

    if (comentario.length < 20) { 
        alert("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }


    visita.forEach(function(visita) {      
        if (visita.checked) {
            radioSelecionado = true;
            if (visita.value === "sim") {
                    alert("Volte sempre!!!");
            } else {
                    alert("Que bom que você voltou a visitar esta página!");
            }
        }
    });
    
    if (!radioSelecionado) {
        alert("Selecione uma opção na pesquisa.");
        return false;
    }
}