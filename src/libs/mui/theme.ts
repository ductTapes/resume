import { createTheme } from '@mui/material'
import { Theme } from '@mui/material/styles/createTheme'

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    blue: string
    darkBlue: string

    green: string
    darkGreen: string

    purple: string
    darkPurple: string
  }
}

const theme: Theme = createTheme({
  palette: {
    common: {
      white: '#fff',
      black: '#1C1B21',

      blue: '#A8E5F8',
      darkBlue: '#4E7AB5',

      green: '#DCFABD',
      darkGreen: '#2F4839',

      purple: '#EDE2FF',
      darkPurple: '#7909BD',
    },
    primary: {
      main: '#FFFACA',
      contrastText: '#1C1B21',
    },
    secondary: {
      light: '#F2EFEF',
      main: '#3C3B43',
      contrastText: '#928B8B',
    },
    text: {
      primary: '#1C1B21',
      secondary: '#928B8B',
    },
  },

  typography: {
    fontFamily: 'Comic Neue, sans-serif',

    h1: {
      fontSize: '5rem',
      fontFamily: 'Delicious Handrawn, sans-serif',
      fontWeight: 400,
      lineHeight: 1.2,
    },

    h3: {
      fontSize: '2rem',
      fontWeight: 400,
    },

    body1: {
      fontSize: '2rem',
    },

    body2: {
      fontSize: '1.25rem',
    },

    button: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1,
      textTransform: 'none',
    },
  },
})

export default theme
