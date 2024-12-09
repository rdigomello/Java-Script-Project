let quebrada = false;
function mudaLampada(tipo){    
    if(tipo == 1){
        arquivo = "img/lampadaacessa.jpg";
    }
    if(tipo == 2){
        arquivo = "img/lampada.jpeg";
    }
    if(tipo == 3){
        arquivo = "img/lampadaquebrada.jpeg";
    }
    if(!quebrada){
        document.getElementById("Luz").src = arquivo;
        if(tipo == 3){
            quebrada = true;
        }
    }
   
}