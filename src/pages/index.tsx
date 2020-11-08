import {
  Button,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core'
import getConfig from 'next/config'
import { path, or } from 'ramda'
import React, { FC, useState, useEffect } from 'react'
import { onMediaQuery } from '../helpers/breakpoints'
import { connectToRedux, StateAction } from '../helpers/redux'
import {
  CounterState,
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from '../store/counter'
import { useRouteAsState } from '../hooks/useRouteAsState'
import { useDebounce } from '../hooks/useDebounce'
import { concatAll } from '../helpers/string'

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(4),
  },
  buttonContainer: {
    padding: theme.spacing(3),
  },
  inputGrid: {
    padding: theme.spacing(3),
    margin: concatAll(theme.spacing(5), ' 0'),
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
  const { buttonContainer, page, inputGrid } = useStyles()
  const env = path(['publicRuntimeConfig', 'enviroment'], getConfig())
  const [test, setTest] = useRouteAsState('test', 10)
  const [query, setQuery] = useState<any>(test)

  const debounced = useDebounce(query, 500)

  useEffect(() => {
    setTest(or(debounced, ''))
  }, [debounced])

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
          You are seeing this on a {onMediaQuery('small', 'medium', 'large')}{' '}
          screen
        </Typography>
        <Typography>in {env} mode</Typography>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        className={inputGrid}
      >
        <Typography variant="h6">
          {`Set here the value of query parameter "test"`}
        </Typography>

        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="here"
            variant="outlined"
            onChange={({ target: { value } }) => {
              setQuery(value)
            }}
          />
        </form>
      </Grid>
    </Grid>
  )
}

export default connectToRedux(
  [{ stateName: 'counter', statePath: ['counter'] }],
  { increaseCounter, decreaseCounter, resetCounter },
)(Home)
