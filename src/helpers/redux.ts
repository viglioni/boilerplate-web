import { compose, map, mergeAll, pathOr } from 'ramda';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";


/*
 * Define simple actions dispatchers
 */

export type StateAction = (payload?: any) => (d: Dispatch<any>) => Promise<void>;
export type SimpleAction = (t: string) => StateAction;

export const simpleAction: SimpleAction = (type) => (payload) => async (dispatch) => {
  dispatch({ type, payload });
};


/*
 * Connect component to redux
 */

type StateParam = {
  stateName: string,
  statePath: string[]
}

type StateProps = Record<string, any>

export const connectToRedux = (states: StateParam[], actions: Record<string, StateAction>) => {
  const mapStateToProps = (state: any) =>
    compose(
      mergeAll,
      map<StateParam, StateProps>(({ stateName, statePath }) =>
        ({ [stateName]: pathOr(null, statePath, state) })),
    )(states)


  const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
      actions,
      dispatch,
    )
  return compose(connect(mapStateToProps, mapDispatchToProps))
}
