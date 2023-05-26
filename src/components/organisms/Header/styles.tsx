import { Box, styled } from '@mui/material'
import LinkComponent from 'src/components/atoms/Link'
import { css } from '@mui/material/styles'

export const Root = styled('header')`
  height: 4.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.375rem;
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  z-index: 10;
`

export const LogoContainer = styled(Box)`
  transition: transform 0.3s linear;

  &:hover {
    transform: rotate(360deg);
  }
`

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 30rem;
  width: 100%;
`

export const Link = styled(LinkComponent)(
  ({ theme }) => css`
    font-size: 1.375rem;

    &:hover {
      color: ${theme.palette.primary.dark};
      -webkit-text-fill-color: ${theme.palette.primary
        .dark}; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: ${theme.palette.text.primary};
    }
  `,
)
