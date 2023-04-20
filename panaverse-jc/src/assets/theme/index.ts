'use client'

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: (props: any) => ({
          'html, body': {
            minHeight: '100vh',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
          },
        }),
      }, 
    colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    blue: {
        50: '#e1efff',
        100: '#b5cefe',
        200: '#88adf8',
        300: '#5a8df2',
        400: '#2c6ced',
        500: '#1253d3',
        600: '#0a40a5',
        700: '#042e77',
        800: '#001c4a',
        900: '#00091e',
      },
  },
})

export default theme;