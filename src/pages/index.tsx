import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import getConfig from 'next/config'
import { path } from 'ramda'
import React, { FC } from 'react'
import { onMediaQuery } from '../helpers/breakpoints'
import { connectToRedux, StateAction } from '../helpers/redux'
import {
  CounterState,
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from '../store/counter'

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(4),
  },
  buttonContainer: {
    padding: theme.spacing(3),
  },
}))

type HomeParams = {
  increaseCounter: StateAction
  decreaseCounter: StateAction
  resetCounter: StateAction
  counter: CounterState
}

const Home: FC<HomeParams> = ({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
}) => {
  const { buttonContainer, page } = useStyles()
  const env = path(['publicRuntimeConfig', 'enviroment'], getConfig())
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={page}
    >
      <Typography variant="h1"> Hello There </Typography>

      <Typography variant="h3"> Counter is: {counter} </Typography>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={buttonContainer}
        spacing={1}
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

      <Grid>
        <Typography>
          You are seeing this on a {onMediaQuery('small', 'medium', 'large')}
        </Typography>
        <Typography>screen in {env} mode</Typography>
      </Grid>
    </Grid>
  )
}

export default connectToRedux(
  [{ stateName: 'counter', statePath: ['counter'] }],
  { increaseCounter, decreaseCounter, resetCounter },
)(Home)
