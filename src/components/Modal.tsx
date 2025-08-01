import type { TimerModalProps } from '../utils/tomato-timer-types'

export const Modal = ({ showModal, onClick }: TimerModalProps) => {
  if (!showModal) {
    return null
  }
  return (
    <div className=" py-2 px-1 text-slate-300 font-thin tracking-wider rounded-xl bg-sky-700/75">
      <button
        className="mx-4 my-1 hover:text-cyan-300"
        aria-label="Pomodoro timer. 4 reps of 20 minute work periods and 5 minute break periods."
        onClick={() => {
          onClick('20/5', 20)
        }}
      >
        20 / 5
      </button>
      <div className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
      <button
        className="mx-3 my-1 hover:text-cyan-300"
        aria-label="Pomodoro timer. 4 reps of 40 minute work periods and  minute break periods"
        onClick={() => {
          onClick('40/10', 40)
        }}
      >
        40 / 10
      </button>
    </div>
  )
}
