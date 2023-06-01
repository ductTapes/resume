import { Box, keyframes, styled, Typography, TypographyProps } from '@mui/material'
import { css } from '@mui/material/styles'
import shouldForwardProp from '../../../helpers/shouldForwardProp'

export const Root = styled(Box, {
  shouldForwardProp: shouldForwardProp('showAnimation'),
})<{ showAnimation: boolean }>(
  ({ showAnimation }) => css`
    height: 100vh;
    padding-top: 6.375rem;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear 0.6s;

    ${showAnimation &&
    css`
      opacity: 1;
    `}
  `,
)

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

export const Name = styled((props: TypographyProps) => <Typography variant="h1" {...props} />)`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const NameLine = styled(
  (props: TypographyProps) => <Typography component="span" variant="inherit" {...props} />,
  {
    shouldForwardProp: shouldForwardProp('showAnimation', 'delay'),
  },
)<{ delay?: number; showAnimation: boolean }>(
  ({ theme, delay = 0.75, showAnimation }) => css`
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.palette.primary.dark};

      ${showAnimation &&
      css`
        animation: ${HighlightNameKeyframes} 1.3s linear ${delay}s 1 normal forwards;
      `}
      transform: translateX(-100%);
      z-index: 1;
    }

    ${NameText} {
      ${showAnimation &&
      css`
        animation: ${OpacityKeyframes} 1.3s linear ${delay}s 1 normal forwards;
      `}
    }
  `,
)

export const NameText = styled((props: TypographyProps) => (
  <Typography component="span" variant="inherit" {...props} />
))(
  () => css`
    white-space: nowrap;
    opacity: 0;
  `,
)

export const WhiteLetters = styled((props: TypographyProps) => (
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
  shouldForwardProp: shouldForwardProp('absolute'),
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

const HighlightNameKeyframes = keyframes`
  0% {
   transform: translateX(-100%);
  }
  
  100% {
    transform: translateX(100%);
  }
`

const OpacityKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  
  49% {
    opacity: 0;

  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 1;
  }
`
