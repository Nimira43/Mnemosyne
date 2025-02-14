const voiceSelect = document.getElementById('voiceSelect')
const playButton = document.getElementById('playButton')
const textInput = document.querySelector('textarea')

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  speechSynthesis.speak(utterance)
})