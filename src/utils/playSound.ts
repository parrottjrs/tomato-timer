import beep from '../sounds/beep.wav'

export const playSound = () => {
  new Audio(beep).play()
}
