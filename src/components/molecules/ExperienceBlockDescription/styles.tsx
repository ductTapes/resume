import { Box, BoxProps, styled, Typography, TypographyProps } from '@mui/material'
import { css } from '@mui/material/styles'
import Link from 'src/components/atoms/Link'

export const Root = styled(Box)`
  font-size: 1.25rem;
  max-width: 31.25rem;
  width: 100%;
  padding-top: 12rem;
` as typeof Box

export const ListItem = styled((props: BoxProps) => <Box component="li" {...props} />)`
  display: grid;
  grid-template-columns: 8rem 1fr;

  & + & {
    margin-top: 1rem;
  }
` as typeof Box

export const ListItemTitle = styled((props: TypographyProps) => (
  <Typography variant="inherit" {...props} />
))(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
  `,
) as typeof Typography

export const ListItemValue = styled((props: TypographyProps) => (
  <Typography variant="inherit" {...props} />
))(
  ({ theme }) => css`
    color: ${theme.palette.common.white};
  `,
) as typeof Typography

export const ListItemLinkValue = styled(Link)(
  ({ theme }) => css`
    color: ${theme.palette.common.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      ${ListItemLinkArrowContainer} {
        svg {
          transform: translate(100%, -100%);
        }
      }
    }
  `,
)

export const ListItemLinkArrowContainer = styled((props: TypographyProps) => (
  <Typography {...props} component="span" />
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 13px;
  height: 13px;

  svg {
    transition: transform 0.2s linear;
    width: 100%;
    height: 100%;
  }

  svg:nth-of-type(2) {
    position: absolute;
    right: 100%;
    top: 100%;
  }
`

export const DescriptionContainer = styled(Box)(
  ({ theme }) => css`
    margin-top: 1.875rem;
    color: ${theme.palette.secondary.contrastText};

    span {
      color: ${theme.palette.common.white};
    }
  `,
)
