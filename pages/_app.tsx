import GlobalStyles from '@styles/global'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import type { AppProps } from 'next/app'
import Header from '@components/Header'
import Head from 'next/head'

const Div = styled.div`
  padding-top: ${({theme}) => theme.values.headerSize};
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{Component.name}</title>
        <link rel='icon' type='image/png' href='/Lampada.png' />
      </Head>
      <Header />
      <Div>
        <Component {...pageProps} />
      </Div>
      <GlobalStyles />
    </ThemeProvider>
  )
}
