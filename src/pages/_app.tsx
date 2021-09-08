import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme  } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#FFBA0880",
    500: "#FFBA08",
  },
}

const fonts = {
  body: "Poppins, system-ui, sans-serif",
  heading: "Poppins, system-ui, sans-serif",
  mono: "Menlo, monospace",
}

const theme = extendTheme({ colors, fonts })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
