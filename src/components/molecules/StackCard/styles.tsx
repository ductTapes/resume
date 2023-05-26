import { Box, styled, Typography, TypographyProps } from '@mui/material'
import { css } from '@mui/material/styles'

export const Root = styled(Box)<{ showMore: boolean }>(
  ({ theme, showMore }) => css`
    cursor: pointer;
    background-color: ${theme.palette.secondary.light};
    padding: 4.875rem 2rem 4rem;
    border-radius: 1.25rem;
    transition: background-color 0.2s linear;
    position: relative;
    overflow: hidden;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      background-color: ${theme.palette.primary.main};
    }

    ${showMore &&
    css`
      ${Description} {
        transform: translateY(0);
      }
    `}
  `,
)

export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: 10rem;
  }
`

export const Title = styled(Typography)`
  text-align: center;
  margin-top: 2.5rem;
`

export const Description = styled(Typography)(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: transform 0.2s linear;
    background-color: ${theme.palette.primary.main};
    padding: 3.625rem 1rem;
    font-size: 1.25rem;
    line-height: 1;
    text-align: center;
  `,
)

export const Bold = styled((props: TypographyProps) => (
  <Typography component="span" variant="inherit" {...props} />
))`
  font-weight: 700;
` as typeof Typography
