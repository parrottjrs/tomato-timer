import type { ACTIONS } from './reducer'

// 1. State type
export type ActionType = [keyof typeof ACTIONS]

export type PomodoroState = {
  pomType?: string
  seconds?: number
  minutes?: number
  reps?: number
  breakTime?: boolean
}

// 2. Action type
export type PomodoroAction =
  | {
      type: 'START_TIMER'
      payload: { pomType: string; reps: number; minutes: number }
    }
  | { type: 'STOP_TIMER' }
  | { type: 'SUBTRACT_SECOND' }
  | { type: 'SUBTRACT_MINUTE' }
  | { type: 'BREAK_TIME'; payload: number }
  | { type: 'WORK_TIME'; payload: number }

export type TimerModalProps = {
  showModal: boolean
  onClick: ((pomType: string, workTime: number) => void) | (() => void)
}

export type TimerOffProps = {
  onClick: () => void
  timeState: { minutes?: number; seconds?: number }
}

export type TimerOnProps = {
  onClick: () => void
}
