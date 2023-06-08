import { Box, keyframes, styled } from '@mui/material'
import LinkComponent from 'src/components/atoms/Link'
import { css } from '@mui/material/styles'
import shouldForwardProp from 'src/helpers/shouldForwardProp'

export const Root = styled('header', {
  shouldForwardProp: shouldForwardProp('isDarkMode', 'isFinishedAppLoadAnimation'),
})<{ isDarkMode: boolean; isFinishedAppLoadAnimation: boolean }>(
  ({ theme, isDarkMode, isFinishedAppLoadAnimation }) => css`
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

    ${theme.breakpoints.down('lg')} {
      padding: 0 1.75rem;
    }

    ${theme.breakpoints.down('md')} {
      top: 1rem;
    }

    ${isFinishedAppLoadAnimation &&
    css`
      ${LogoContainer} {
        animation: ${ShowKeyframes} 1s linear 1 normal forwards;
        animation-delay: 0.1s;
      }

      ${Link} {
        animation: ${ShowKeyframes} 1s linear 1 normal forwards;

        &:nth-of-type(1) {
          animation-delay: 0.2s;
        }

        &:nth-of-type(2) {
          animation-delay: 0.3s;
        }

        &:nth-of-type(3) {
          animation-delay: 0.4s;
        }

        &:nth-of-type(4) {
          animation-delay: 0.5s;
        }
      }
    `}

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

export const LogoContainer = styled(Box)(
  ({ theme }) => css`
    opacity: 0;
    transition: transform 0.3s linear, opacity 0.2s linear 0.5s;

    width: 4rem;
    height: 4rem;

    ${theme.breakpoints.down('md')} {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      transform: rotate(360deg);
    }

    svg {
      width: 100%;
      height: 100%;

      * {
        transition: fill 0.2s linear, stroke 0.2s linear;
      }
    }
  `,
)

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 23rem;
  width: 100%;
`

export const Link = styled(LinkComponent)(
  ({ theme }) => css`
    font-size: 1.5rem;
    transition: color 0.2s linear;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: ${theme.palette.primary.dark};
      -webkit-text-fill-color: ${theme.palette.primary
        .dark}; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: ${theme.palette.text.primary};
    }
  `,
)

const ShowKeyframes = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;

  }
  
  100% {
    opacity: 1;
    visibility: visible;
  }
`
