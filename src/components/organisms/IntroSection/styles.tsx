import { Box, keyframes, styled, Typography, TypographyProps } from '@mui/material'
import { css } from '@mui/material/styles'
import shouldForwardProp from 'src/helpers/shouldForwardProp'
import { forwardRef } from 'react'

export const Root = styled(Box, {
  shouldForwardProp: shouldForwardProp('showAnimation'),
})<{ showAnimation: boolean }>(
  ({ theme, showAnimation }) => css`
    height: 100vh;
    padding-top: 6.375rem;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear 0.6s;

    ${theme.breakpoints.down('sm')} {
      //height: 80vh;
      padding-top: 0;
      position: relative;
    }

    ${showAnimation &&
    css`
      opacity: 1;
    `}
  `,
)

export const WelcomeContainer = styled(Box)(
  ({ theme }) => css`
    height: 100%;
    display: flex;
    //align-items: center;
    flex-direction: column;
    justify-content: center;
    transform: translateX(7rem);
    position: relative;
    z-index: 1;

    ${theme.breakpoints.down('lg')} {
      transform: translateX(2rem);
    }

    ${theme.breakpoints.down('sm')} {
      transform: translateX(0);
    }
  `,
)

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

export const NameLetter = styled(
  forwardRef<HTMLSpanElement>((props: TypographyProps, ref) => (
    <Typography component="span" variant="inherit" {...props} ref={ref} />
  )),
  {
    shouldForwardProp: shouldForwardProp('white'),
  },
)<TypographyProps & { white?: boolean }>(
  ({ theme, white }) => css`
    ${white &&
    css`
      color: ${theme.palette.text.primary};
      -webkit-text-fill-color: ${theme.palette.common
        .white}; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${theme.palette.text.primary};
    `}
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

export const ButtonContainer = styled(Box)(
  ({ theme }) => css`
    max-width: 14.125rem;
    width: 100%;
    margin-top: 1.875rem;
    margin-left: 15%;

    ${theme.breakpoints.down('md')} {
      margin-left: 1.3rem;
    }

    ${theme.breakpoints.down('sm')} {
      margin-top: 1rem;
      max-width: 5rem;
    }

    button {
      ${theme.breakpoints.down('sm')} {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
      }
    }
  `,
)

export const PhotoContainer = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    left: 42%;
    max-width: 35rem;
    width: 45%;
    min-width: 30rem;

    ${theme.breakpoints.down('md')} {
      width: 50%;
      min-width: 12.5rem;
    }

    ${theme.breakpoints.down('sm')} {
      left: auto;
      right: 0;
    }
  `,
)

export const Img = styled('img', {
  shouldForwardProp: shouldForwardProp('absolute'),
})<{ absolute?: boolean }>(
  ({ absolute }) => css`
    width: 100%;
    height: auto;

    ${absolute &&
    css`
      position: absolute;
      top: -5%;
      right: -5%;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
