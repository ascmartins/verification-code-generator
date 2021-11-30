const codeGen = require('./index.js')

const allchars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ!#$()[]{}-*+&%'
const numbers = '0123456789'

console.log(codeGen(4, numbers))
console.log(codeGen(6, numbers))
console.log(codeGen(9, numbers))
console.log(codeGen(4, allchars))
console.log(codeGen(8, allchars))
console.log(codeGen(9, allchars))
