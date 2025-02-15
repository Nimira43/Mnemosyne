import languages from './languages.js'

const voiceSelect = document.getElementById('voiceSelect')
const playButton = document.getElementById('playButton')
const languageSelect = document.getElementById('languageSelect')
const textInput = document.querySelector('textarea')

languages.forEach(({ code, name }) => {
  const option = document.createElement('option')
  option.value = code
  option.textContent = name
  languageSelect.appendChild(option)
})

let voices = []

function loadVoices() {
  voices = speechSynthesis.getVoices()
  voiceSelect.innerHTML = voices
  .map((voice, index) => 
    `
      <option value=${index}>
        ${voice.name} ($voice.lang)
      </option>
    `
  )
  .join('')
}

speechSynthesis.onvoiceschanged = loadVoices
loadVoices()

playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value)
  const selectedVoice = voices[voiceSelect.value]
  if (selectedVoice) utterance.voice = selectedVoice
  speechSynthesis.speak(utterance)
})