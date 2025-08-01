import { Timer as TimerIcon } from 'lucide-react'

import '../timer.css'

import type { TimerOnProps } from '../utils/tomato-timer-types'

export default function TimerOn({ onClick }: TimerOnProps) {
  return (
    <button id="timerMenu" onClick={() => onClick()}>
      <TimerIcon className="timer-on" strokeWidth={1} />
    </button>
  )
}
