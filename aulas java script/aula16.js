let amigo = {nome:'José', 
sexo:'M', 
peso:85.4, 
engonrdar(p){
    console.log('Engordou')
    this.peso +=p
}}
amigo.engonrdar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)