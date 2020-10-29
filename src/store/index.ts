import { createWrapper } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, combineReducers, createStore, PreloadedState, Store } from "redux";
import thunk from "redux-thunk";
import counter from './counter'



const reducer = (state: any, action: AnyAction) => {
  return combineReducers({
    counter,
  })(state, action)
}

export const initStore = (preloadedState?: PreloadedState<unknown>): Store => {
  return createStore(reducer, preloadedState, applyMiddleware(thunk))
}

export const wrapper = createWrapper(initStore)
