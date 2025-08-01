import beep from '../sounds/beep.wav'

const beepSound = new Audio(beep)

export const unlockAudio = () => {
  beepSound
    .play()
    .then(() => {
      beepSound.pause()
      beepSound.currentTime = 0
    })
    .catch((e) => {
      console.warn('Audio unlock failed. Likely a Safari issue:', e)
    })
}

export const playSound = () => {
  beepSound.currentTime = 0
  beepSound.play().catch((e) => {
    console.warn('Audio play failed:', e)
  })
}
