let sabores = ["Açai com Banana","Açai Misto","Açai com Morango","Açai Tradicional"]
let estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

$(function(){
    $("#banner-fundo").slideDown(500); // efeito 1
    $("#banner-cont").fadeOut(0); // efeito 2
    window.setTimeout(() => $(".escondido-inicio").removeClass("escondido-inicio"), 500);
    window.setTimeout(() => $("#banner-cont").fadeIn(1000), 500); // efeito 3
    window.setTimeout(() => $("#form").fadeTo(500, .8)); // efeito 4
    $("#email").focus(() => tirarVermelho()) // evento 1
    $("#email").blur(() => validacaoEmail()) // evento 2
    $("#uf").autocomplete({source: estadosBrasileiros}); // UI 1
    $("#sabor").selectmenu(); // UI 2
    $("#form button").button(); // UI 3
    $("#form button").click(() => validacaoEmail() ? removerForm() : alert("Email Inválido")) // Evento 3
    $("#dialog-abrir").tooltip(); // UI 4
    $("#dialog").dialog({ // UI 5
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "blind",
          duration: 500
        }
      });
    $("#form").mouseenter(() => $("#form").fadeTo(350, 1)) // Evento 4
    $("#form").mouseleave(() => $("#form").fadeTo(350, .8)) // Evento 5
    $("#dialog-abrir").click(() => $("#dialog").dialog("open"));
})

function removerForm(){
    $("#form").off("mouseleave")
    $("#form").fadeOut(500) // efeito 5
}

// ▲▼▲▼▲▼▲▼ Email ▲▼▲▼▲▼▲▼ //

function tirarVermelho(){
    document.getElementById("email").style.boxShadow = "";
}

function validacaoEmail(field) {
    if (field == undefined){
        field = document.getElementById("email");
    }
    if (field.value == ''){
        document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false
    }

    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("email").style.boxShadow = "";
    /* alert("E-mail válido"); */
    } else {
    document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
    return false
    //alert("E-mail inválido");
    }
    return true
}

function cadastrarEmail(){
    if (validacaoEmail()) {
        alert("Email cadastrado com sucesso.")
        document.getElementById("email").value = ""
    }
}