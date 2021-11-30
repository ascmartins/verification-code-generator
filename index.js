module.exports = function (size, characters) {
  if (isNaN(size)) {
    throw new TypeError('Size has to be a number', 'verification-code-generator/index.js', 3)
  }

  if (size < 4) {
    throw new TypeError('Size has to be greater than or equals to 4', 'verification-code-generator/index.js', 7)
  }

  if (typeof characters !== 'string') {
    throw new TypeError('Characters must be a string', 'verification-code-generator/index.js', 11)
  }

  if (characters.length < 10) {
    throw new TypeError('Number of characters has to be, at least, 10', 'verification-code-generator/index.js', 11)
  }


  let code = ''

  let charsLength = characters.length
  for (let i = 0; i < size; i++) {
    code += characters.charAt(Math.floor(Math.random() * charsLength))
  }

  return code

}
