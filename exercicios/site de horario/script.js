let hora = 8
function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#fffab2'
    } else if ( hora >= 12 && hora <= 18){
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#face9b'
    } else {
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#92a2fd'
    }
}