// g - global
// i - ignore case insensitive

const text = 'Carlos assinou o abaixo-assinado.'

console.log(text.match(/C|ab/))
console.log(text.match(/c|ab/i))
console.log(text.match(/c|ab/gi))

for (const result of text.matchAll(/c|ab/gi)) { console.log(result) }

const expression = /c|ab/gi

while ((match = expression.exec(text)) != null) {
  console.log(`Match found at ${match.index}`)
}
