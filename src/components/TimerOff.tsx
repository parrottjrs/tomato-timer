import type { TimerOffProps } from '../utils/tomato-timer-types'
import { prependZero } from '../utils/utils'
import '../timer.css'
import { TimerOff as TimerOffIcon } from 'lucide-react'

const TimerOff = ({ onClick, timeState }: TimerOffProps) => {
  const { minutes, seconds } = timeState
  return (
    <div className="flex flex-row items-center">
      <button id="stopTimer" onClick={() => onClick()}>
        <TimerOffIcon className="timer-off" strokeWidth={1} />
      </button>
      <div>
        {prependZero(minutes)}:{prependZero(seconds)}
      </div>
    </div>
  )
}

export default TimerOff
