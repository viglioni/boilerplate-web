import { map, mergeAll, pathOr } from 'ramda'
import { connect } from 'react-redux'
import { compose, bindActionCreators, Dispatch, AnyAction } from 'redux'
import { FC } from 'react'

/*
 * Define simple actions dispatchers
 */

export type StateAction = (
  payload?: unknown,
) => (d: Dispatch<any>) => Promise<void>
export type SimpleAction = (t: string) => StateAction

export const simpleAction: SimpleAction = (type) => (payload) => async (
  dispatch,
) => {
  dispatch({ type, payload })
}

/*
 * Connect component to redux
 */

type StateParam = {
  stateName: string
  statePath: string[]
}

type StateProps = Record<string, any>

export const connectToRedux = (
  states: StateParam[],
  actions: Record<string, StateAction>,
) => (component: FC<any>) => {
  const mapStateToProps = (state: unknown) =>
    compose(
      mergeAll,
      map<StateParam, StateProps>(({ stateName, statePath }) => ({
        [stateName]: pathOr(null, statePath, state),
      })),
    )(states)

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(actions, dispatch)
  return compose(connect(mapStateToProps, mapDispatchToProps))(component)
}
