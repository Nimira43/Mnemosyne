function getRandonChar(text) {
  return text[Math.floor(Math.random() * text.length)]
}

export function generatePassword(config) {
  let result = ''
  let charToSkip = 1
  
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const NUMBERS = '0123456789'
  const SYMBOLS = '!@#$%^&*()_-+=[]{}|;:\'",.<>?/\\'

  let alphabet = LOWERCASE
  result += getRandonChar(UPPERCASE)

  if (config.uppercase) {
    alphabet += UPPERCASE
    result += getRandonChar(UPPERCASE)
    charToSkip++
  }

  if (config.numbers) {
    alphabet += NUMBERS
    result += getRandonChar(NUMBERS)
    charToSkip++
  }

  if (config.symbols) {
    alphabet += SYMBOLS
    result += getRandonChar(SYMBOLS)
    charToSkip++
  }

  for (let i = charToSkip; i < Number(config.size); i++) {
    result += getRandonChar(alphabet)
  }
  console.log(result)
  return result
}