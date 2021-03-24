//Esta função é a resposavel por manipular a tela e fazer o efeito de rolagem
//Ela usa Jquery, por isso baixar a biblioteca jquery.min se torna obrigatorio
jQuery(document).ready(function () {
    //Ao clicar nos href com classe scroll
    $(".scroll").click(function (event) {
      event.preventDefault();
      //animar o html e body ate o conteudo que esta descrito no href="#exemplo",
      //neste caso iriamos ate a div de nome exemplo
      $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1100);
    });
  });
