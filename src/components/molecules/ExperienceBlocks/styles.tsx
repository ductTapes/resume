import { Box, keyframes, styled } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.palette.secondary.main};
    border-radius: 5rem;
    position: relative;
    padding: 2rem 6.875rem 9.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  `,
)

const LabelKeyframes = keyframes`
  from {
    transform: rotate(-1deg);
  }
  
  to {
    transform: rotate(1deg);
  }
`

export const LabelIconContainer = styled(Box)`
  position: absolute;
  top: 0.2rem;
  left: 3rem;
  transform-origin: top left;
  animation: 0.5s ease-in-out 0s infinite alternate ${LabelKeyframes};
`

export const ImageContainer = styled(Box)`
  max-width: 37%;
  width: 100%;
  height: fit-content;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    max-height: 20rem;
  }
`
