const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./

console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /

console.log(texto.split(regexSimbolos))
console.log(texto.split(/[,.\s!?]/))
