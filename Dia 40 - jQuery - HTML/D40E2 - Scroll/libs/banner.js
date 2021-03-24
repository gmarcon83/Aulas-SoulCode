/*Esta função em JavaScript é a cria um popup com posição fixa na tela,
este popup tem na pagina em html seu conteudo que neste caso usamos como barra de rolagem da pagina*/
function abre_banner()
{
    //atribuindo a variavel o objeto banner_popup da pagina
    var banner_obj = document.getElementById('banner_popup');
    //Definindo o css deste objeto que agora é representado pela variavel criada
    banner_obj.style.right = '0px';
    banner_obj.style.top = '45%';
    banner_obj.style.display = 'block';
    banner_obj.style.backgroundColor = 'rgba(23, 29, 63, 0.86)';
    banner_obj.style.position = 'fixed';
    banner_obj.style.padding= '4px';
    banner_obj.style.width = '45px';
    banner_obj.style.height = '140px';
    banner_obj.style.styleFloat = 'right';
    banner_obj.style.zIndex = '500';
    banner_obj.style.borderRadius  = '4px 0px 0px 4px';
    banner_obj.style.MozBorderRadius   = '4px 0px 0px 4px';
}
