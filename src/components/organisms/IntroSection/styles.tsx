import { Box, styled, Typography } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled(Box)`
  height: 100vh;
  padding-top: 8.375rem;
  display: flex;
  align-items: center;
  //justify-content: center;
  padding-left: 4rem;
`

export const WelcomeContainer = styled(Box)`
  height: 100%;
  display: flex;
  //align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translateX(7rem);
  position: relative;
  z-index: 1;
`

export const Name = styled(props => <Typography variant="h1" {...props} />)`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const NameLine = styled(props => (
  <Typography component="span" variant="inherit" {...props} />
))`
  white-space: nowrap;
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

export const ButtonContainer = styled(Box)`
  max-width: 14.125rem;
  width: 100%;
  margin-top: 1.875rem;
  margin-left: 15%;
`

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
