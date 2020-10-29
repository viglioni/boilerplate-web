import { always, cond, equals, T } from "ramda"
import { AnyAction, Reducer } from "redux"
import { simpleAction, StateAction } from "../helpers/redux"

export type CounterState = number

const initalState: CounterState = 0

export const counterActionTypes = {
  INCREASE: '[counter][increase]',
  DECREASE: '[counter][decrease]',
  RESET: '[counter][reset]'
}

/*
 * Actions
 */

export const increaseCounter: StateAction = simpleAction(counterActionTypes.INCREASE)

export const decreaseCounter: StateAction = simpleAction(counterActionTypes.DECREASE)

export const resetCounter: StateAction = simpleAction(counterActionTypes.RESET)


/*
 * Reducer
 */

const reducer: Reducer = (state: CounterState = initalState, action: AnyAction) => {
  const actionType = action.type as never
  const { INCREASE, DECREASE, RESET } = counterActionTypes
  return cond([
    [equals(INCREASE), always(state + 1)],
    [equals(DECREASE), always(state - 1)],
    [equals(RESET), always(0)],
    [T, always(state)]
  ])(actionType)
}

export default reducer
