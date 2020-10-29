import { always, assoc, cond, equals, T } from "ramda"
import { Dispatch } from "react"
import { AnyAction, Reducer } from "redux"

export type CounterState = {
  counter: number
}

const initalState: CounterState = {
  counter: 0
}


export const counterActionTypes = {
  INCREASE: '[counter][increase]',
  DECREASE: '[counter][decrease]',
  RESET: '[counter][reset]'
}

/*
 * Actions
 */

export const increaseCounter = (payload?: any) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: counterActionTypes.INCREASE,
    payload
  })
}

export const decreaseCounter = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: counterActionTypes.DECREASE,
    payload: null
  })
}

export const resetCounter = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: counterActionTypes.RESET,
    payload: null
  })
}


/*
 * Reducer
 */

const reducer: Reducer = (state: CounterState = initalState, action: AnyAction) => {
  const type = action.type as never
  const { INCREASE, DECREASE, RESET } = counterActionTypes
  const { counter } = state
  return cond([
    [equals(INCREASE), () => assoc('counter', counter + 1, state)],
    [equals(DECREASE), () => assoc('counter', counter - 1, state)],
    [equals(RESET), () => assoc('counter', 0, state)],
    [T, always(state)]
  ])(type)
}

export default reducer
