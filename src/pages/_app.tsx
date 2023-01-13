import { Toggle } from 'components/Toggle'
import { MoviesContextProvider, useMovies } from 'contexts/MoviesContext'
import { useDarkMode } from 'hooks/useDarkMode'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes/default'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, mountedComponent, themeToggler } = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MoviesContextProvider>
        {/* <Toggle themeToggler={themeToggler} /> */}
        <Component {...pageProps} />
      </MoviesContextProvider>
    </ThemeProvider>
  )
}
