import { Box, styled } from '@mui/material'
import LinkComponent from 'src/components/atoms/Link'
import { css } from '@mui/material/styles'

export const Root = styled('header', {
  shouldForwardProp: prop => prop !== 'isDarkMode',
})<{ isDarkMode: boolean }>(
  ({ theme, isDarkMode }) => css`
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

    ${isDarkMode &&
    css`
      ${LogoContainer} svg {
        path {
          fill: ${theme.palette.common.white};
        }

        circle {
          stroke: ${theme.palette.common.white};
        }
      }

      ${Link} {
        color: ${theme.palette.common.white};
      }
    `}
  `,
)

export const LogoContainer = styled(Box)`
  transition: transform 0.3s linear;

  &:hover {
    transform: rotate(360deg);
  }

  svg * {
    transition: fill 0.2s linear, stroke 0.2s linear;
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
    transition: color 0.2s linear;

    &:hover {
      color: ${theme.palette.primary.dark};
      -webkit-text-fill-color: ${theme.palette.primary
        .dark}; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: ${theme.palette.text.primary};
    }
  `,
)
