import { Grid } from '@material-ui/core'
import { compose, identity, map, mapAccum } from 'ramda'
import React from 'react'

/*
 * comment block!
 */

// auto imports
const myMap = map((x) => x + 1)
// check types

// check function/name definition
// m-. and m-, do that!
// format and organize imports on save
// i will zone the code
const a = mapAccum // :)
// paredit

const a = compose(map(identity)) // :)

export default function Home() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <p> Hello There </p>
    </Grid>
  )
}
