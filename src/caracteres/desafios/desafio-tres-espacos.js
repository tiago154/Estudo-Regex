const texto = 'a   b'

console.log(texto.match(/a\s{3}b/g))
console.log(texto.match(/a\s+b/g))
console.log(texto.match(/a\s\s\sb/g))
