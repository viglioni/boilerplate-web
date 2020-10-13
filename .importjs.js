import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import { identity, pathOr } from 'ramda'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import React, { useEffect } from 'react'

import document from './_document';
import theme from './theme/theme'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    pathOr(identity, ['parentElement', 'removeChild'], jssStyles)(jssStyles)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
