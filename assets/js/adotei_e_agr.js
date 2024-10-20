function escondertudo(){
    document.getElementById('texto_menu').style.display = 'none'
    document.getElementById('texto_cuidados').style.display = 'none'
    document.getElementById('texto_alimentacao').style.display = 'none'
    document.getElementById('texto_adaptacao').style.display = 'none'
}

function mostrarcuidados(){
    escondertudo();
    document.getElementById("texto_cuidados").style.display = 'block';
}
function mostraralimento(){
    escondertudo();
    document.getElementById("texto_alimentacao").style.display = 'block';
}
function mostraradapt(){
    escondertudo();
    document.getElementById("texto_adaptacao").style.display = 'block';
}

