import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { css } from '@mui/material/styles'
import { Theme } from '@mui/system'

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
        // color: ${theme.palette.text.primary};
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
