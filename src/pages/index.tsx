import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'
import {
  CounterState,
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from '../store/counter'

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: theme.spacing(3),
  },
}))

type HomeParams = {
  increaseCounter: () => void
  decreaseCounter: () => void
  resetCounter: () => void
} & CounterState

const Home = ({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
}: HomeParams): ReactElement => {
  const { buttonContainer } = useStyles()

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography variant="h1"> Hello There </Typography>

      <Typography variant="h3"> Counter is: {counter} </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
        className={buttonContainer}
      >
        <Grid item>
          <Button variant="outlined" color="primary" onClick={increaseCounter}>
            Increase
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={decreaseCounter}
          >
            Decrease
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="default" onClick={resetCounter}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: any) => {
  const counter: CounterState = state.counter
  return { counter: counter.counter }
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { increaseCounter, decreaseCounter, resetCounter },
    dispatch,
  )

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)
