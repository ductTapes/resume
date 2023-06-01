import { Box, keyframes, styled } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled(Box)<{
  duration: number
  delay: number
  start: boolean
}>(
  ({ theme, duration, delay, start = false }) => css`
    &:before {
      content: '';
      position: fixed;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.palette.common.black};
      z-index: 100;

      ${start &&
      css`
        animation: ${AnimationBeforeKeyframes} ${duration}s linear ${delay}s 1 normal forwards;
      `}
    }

    &:after {
      content: '';
      position: fixed;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.palette.common.white};
      z-index: 99;

      ${start &&
      css`
        animation: ${AnimationAfterKeyframes} ${duration}s linear ${delay}s 1 normal forwards;
      `}
    }
  `,
)

const AnimationBeforeKeyframes = keyframes`
  0% {
    top: 100%;
  }
  
  30%, 60% {
    top: 0;
  }
  
  100% {
    top: -100%;
  }
`

const AnimationAfterKeyframes = keyframes`
  0%, 60% {
    top: 0%;
  }
  
  100% {
    top: -100%;
  }
`
