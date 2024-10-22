function escondertudo(){
    document.getElementById('texto_menu').style.display = 'none'
    document.getElementById('texto_cuidados').style.display = 'none'
    document.getElementById('texto_alimentacao').style.display = 'none'
    document.getElementById('texto_adaptacao').style.display = 'none'
}

function mostrarcuidados(){
    escondertudo();
    document.getElementById("texto_cuidados").style.display = 'flex';
    document.querySelector('#mudar_opcoes').innerHTML = `Cuidados básicos <img id="imagem" src="../images/sinal-de-seta-para-baixo-para-navegar.png" alt="">`
}
function mostraralimento(){
    escondertudo();
    document.getElementById("texto_alimentacao").style.display = 'flex';
    document.querySelector('#mudar_opcoes').innerHTML = `Alimentação <img id="imagem" src="../images/sinal-de-seta-para-baixo-para-navegar.png" alt="">`
}
function mostraradapt(){
    escondertudo();
    document.getElementById("texto_adaptacao").style.display = 'flex';
    document.querySelector('#mudar_opcoes').innerHTML = `Adaptação <img id="imagem" src="../images/sinal-de-seta-para-baixo-para-navegar.png" alt="">`
}

