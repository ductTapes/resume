import { Box, keyframes, Typography, styled, TypographyProps } from '@mui/material'
import SvgIcon from 'src/components/atoms/SvgIcon'
import { css } from '@mui/material/styles'
import { forwardRef } from 'react'
import shouldForwardProp from '../../../helpers/shouldForwardProp'

export const Root = styled(Box)`
  background-image: url('/images/grid.png');
  padding: 10.75rem 0 15rem;
`

export const HighlighterContainer = styled(
  forwardRef<HTMLSpanElement>((props, ref) => (
    <Typography component="span" variant="inherit" {...props} ref={ref} />
  )),
  {
    shouldForwardProp: shouldForwardProp('isViewed'),
  },
)<TypographyProps & { isViewed: boolean }>(
  ({ isViewed }) => css`
    position: relative;

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
  top: 0;
  left: 0;
  width: 0;
  height: 2.5rem;
  mix-blend-mode: multiply;
  pointer-events: none;
  max-width: 508px;
`

const HighlightAnimation = keyframes`
  from {
    width: 0;
  }
  
  to {
    width: 70vw
  }
`
