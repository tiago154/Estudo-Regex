const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = /9/

console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
const regexVirgula = /,/g

console.log('Métodos de string...')
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, 'Achei'))
console.log(texto.split(regexVirgula))
