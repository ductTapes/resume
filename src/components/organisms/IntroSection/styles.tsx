import { Box, styled, Typography } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled(Box)`
  height: 100vh;
  padding-top: 8.375rem;
`

export const WelcomeContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled(props => <Typography variant="h1" {...props} />)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  transform: translateX(8rem);
  position: relative;
  z-index: 1;
`

export const WhiteLetters = styled(props => (
  <Typography component="span" variant="inherit" {...props} />
))(
  ({ theme }) => css`
    color: ${theme.palette.text.primary};
    -webkit-text-fill-color: ${theme.palette.common
      .white}; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.palette.text.primary};
  `,
)

export const PhotoContainer = styled(Box)`
  position: relative;
`

export const Img = styled('img', {
  shouldForwardProp: prop => prop !== 'absolute',
})<{ absolute?: boolean }>(
  ({ absolute }) => css`
    ${absolute &&
    css`
      position: absolute;
      top: -2rem;
      right: -2rem;
      z-index: -1;
    `}
  `,
)
