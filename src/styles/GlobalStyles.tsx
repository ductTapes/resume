import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { css } from '@mui/material/styles'

export const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={theme => css`
      html {
        font-size: 16px;
        font-family: Comic Neue, sans-serif;
      }

      body {
        line-height: 1;
        font-size: 1rem;
        color: ${theme.palette.text.primary};
        font-weight: 400;
        overflow-x: hidden;
      }
      * {
        box-sizing: border-box;
      }
    `}
  />
)

export default GlobalStyles
