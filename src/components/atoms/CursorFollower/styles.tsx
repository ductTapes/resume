import { styled } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled('span')(
  ({ theme }) => css`
    border-radius: 50%;
    width: 0.7rem;
    height: 0.7rem;
    position: fixed;
    background-color: ${theme.palette.common.white};
    transform: translate(-50%, -50%);
    transition: top 0.2s ease, left 0.2s ease, opacity 0.2s linear;
    mix-blend-mode: difference;
    z-index: 1;
    pointer-events: none;
  `,
)
