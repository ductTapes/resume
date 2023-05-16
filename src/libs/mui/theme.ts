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
  },
})

export default theme
