import { useEffect, useReducer, useState } from 'react'
import { playSound, unlockAudio } from '../utils/playSound'
import { ACTIONS, INITIAL_STATE, pomReducer } from '../utils/reducer'
import TimerOn from './TimerOn'
import { Modal } from './Modal'
import TimerOff from './TimerOff'

const Pomodoro = () => {
  const [state, dispatch] = useReducer(pomReducer, INITIAL_STATE)
  const [enabled, setEnabled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!enabled) {
      dispatch({ type: ACTIONS.STOP_TIMER })
      return
    }
    if (state.reps === 0) {
      setEnabled(false)
      setShowModal(false)
      dispatch({ type: ACTIONS.STOP_TIMER })
      return
    }

    const timer = setTimeout(() => {
      if (state.seconds === 0 && state.minutes && state.minutes > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_MINUTE })
      } else if (state.seconds && state.seconds > 0) {
        dispatch({ type: ACTIONS.SUBTRACT_SECOND })
      } else if (
        state.seconds === 0 &&
        state.minutes === 0 &&
        state.reps &&
        state.reps >= 1
      ) {
        playSound()

        if (state.breakTime) {
          dispatch({
            type: ACTIONS.WORK_TIME,
            payload: state.pomType === '20/5' ? 1 : 40,
          })
        } else {
          dispatch({
            type: ACTIONS.BREAK_TIME,
            payload: state.pomType === '20/5' ? 1 : 10,
          })
        }
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [
    enabled,
    state.seconds,
    state.minutes,
    state.reps,
    state.breakTime,
    state.pomType,
    dispatch,
  ])

  const startTimer = (pomType: string, workTime: number) => {
    unlockAudio()
    setEnabled(true)
    setShowModal(false)
    dispatch({
      type: ACTIONS.START_TIMER,
      payload: { pomType: pomType, reps: 4, minutes: workTime },
    })
  }

  const stopTimer = () => {
    setEnabled(false)
    setShowModal(false)
    dispatch({ type: ACTIONS.STOP_TIMER })
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div style={{ margin: 'auto' }}>
      {showModal && (
        <div
          className="fixed w-full h-full inset-0 opacity-0"
          onClick={handleShowModal}
        ></div>
      )}
      {!enabled ? (
        <div className="relative">
          <TimerOn onClick={handleShowModal} />
          <Modal showModal={showModal} onClick={startTimer} />
        </div>
      ) : (
        <TimerOff
          onClick={() => stopTimer()}
          timeState={{ minutes: state.minutes, seconds: state.seconds }}
        />
      )}
    </div>
  )
}

export default Pomodoro
