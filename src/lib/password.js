function getRandonChar(text) {
  return text[Math.floor(Math.random() * text.length)]
}

export function generatePassword(config) {
  let result = ''
  
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const NUMBERS = '0123456789'
  const SYMBOLS = '!@#$%^&*()_-+=[]{}|;:\'",.<>?/\\'

  let alphabet = LOWERCASE
  result += getRandonChar(UPPERCASE)

  if (config.uppercase) {
    alphabet += UPPERCASE
    result += getRandonChar(UPPERCASE)
  }
  if (config.numbers) {
    alphabet += NUMBERS
    result += getRandonChar(NUMBERS)
  }
  if (config.symbols) {
    alphabet += SYMBOLS
    result += getRandonChar(SYMBOLS)
  }
  console.log(result)
  return result
}