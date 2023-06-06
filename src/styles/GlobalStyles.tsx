import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { css, Theme } from '@mui/material/styles'

export const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={(theme: Theme) => css`
      html {
        font-size: 16px;
        font-family: Comic Neue, sans-serif;
      }

      body {
        line-height: 1;
        font-size: 1rem;
        font-weight: 400;
        overflow-x: hidden;
        background-color: ${theme.palette.common.white};
      }
      * {
        box-sizing: border-box;
      }
    `}
  />
)

export default GlobalStyles
