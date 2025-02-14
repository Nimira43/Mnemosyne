const voiceSelect = document.getElementById('voiceSelect')
const playButton = document.getElementById('playButton')
const textInput = document.querySelector('textarea')

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
  speechSynthesis.speak(utterance)
})