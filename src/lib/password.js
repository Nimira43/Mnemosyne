function getRandonChar(text) {
  return text[Math.floor(Math.random() * text.length)]
}

export function generatePassword(config) {
  let result = ''
  
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_-+=[]{}|;:\'",.<>?/\\'

  let alphabet = lowercase

  if (config.uppercase) {
    alphabet += uppercase
    getRandonChar(uppercase)
  }
  return result
}