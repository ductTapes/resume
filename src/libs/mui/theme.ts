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
      dark: '#FFF6A9',
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
      fontSize: '2.25rem',
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

const tabletBreakpoint = theme.breakpoints.down('md')
const mobileBreakpoint = theme.breakpoints.down('sm')

theme.typography.h1 = {
  ...theme.typography.h1,

  [tabletBreakpoint]: { fontSize: '4rem' },

  [mobileBreakpoint]: { fontSize: '1.875rem' },
}

theme.typography.h3[mobileBreakpoint] = {
  fontSize: '1.625rem',
}

theme.typography.body1[mobileBreakpoint] = {
  fontSize: '1.625rem',
}

theme.typography.body2[mobileBreakpoint] = {
  fontSize: '1rem',
}

theme.typography.button[mobileBreakpoint] = {
  fontSize: '0.75rem',
}

export default theme
