function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Verificar os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero =''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagem/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagem/homem jovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagem/homem adulto.jpg')
            } else {
                img.setAttribute('src', 'imagem/senhor.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagem/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagem/mulher jovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagem/mulher adulta.jpg')
            } else {
                img.setAttribute('src', 'imagem/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)
    }
}