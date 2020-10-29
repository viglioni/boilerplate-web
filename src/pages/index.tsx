import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connectToRedux, StateAction } from '../helpers/redux'
import {
  CounterState,
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from '../store/counter'
import { compose } from 'ramda'

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: theme.spacing(3),
  },
}))

type HomeParams = {
  increaseCounter: StateAction
  decreaseCounter: StateAction
  resetCounter: StateAction
  counter: CounterState
}

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

export default connectToRedux(
  [{ stateName: 'counter', statePath: ['counter'] }],
  { increaseCounter, decreaseCounter, resetCounter },
)(Home)
