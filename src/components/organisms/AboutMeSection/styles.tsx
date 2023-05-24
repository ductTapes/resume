import { Box, keyframes, Typography, styled } from '@mui/material'
import { SvgIcon } from 'src/components/atoms/SvgIcon/SvgIcon'
import { css } from '@mui/material/styles'
import { forwardRef } from 'react'

export const Root = styled(Box)`
  background-image: url('/images/grid.png');
  padding: 10.75rem 0 15rem;
`

export const HighlightedText = styled(
  forwardRef<HTMLSpanElement>((props, ref) => (
    <Typography component="span" variant="inherit" {...props} ref={ref} />
  )),
  {
    shouldForwardProp: (prop: string) => prop !== 'isViewed',
  },
)<{ isViewed: boolean }>(
  ({ isViewed }) => css`
    position: relative;
    white-space: nowrap;

    & ${Highlighter} {
      ${isViewed &&
      css`
        animation: ${HighlightAnimation} 1s linear 0.5s 1 normal forwards;
      `}
    }
  `,
)

export const Highlighter = styled(SvgIcon)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 2.5rem;
  transform: translateY(-50%);
  mix-blend-mode: multiply;
  pointer-events: none;
`

const HighlightAnimation = keyframes`
  from {
    width: 0;
  }
  
  to {
    width: 100%;
  }
`
