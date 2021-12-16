const texto = 'Bom\ndia'

console.log(texto.match(/./g)) // Não retorna a quebra de linha
console.log(texto.match(/..../g))

// dotall - algumas linguagens tem uma flag /s, mas não no JS
