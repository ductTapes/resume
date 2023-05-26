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
  `,
) as typeof Link

export const DescriptionContainer = styled(Box)(
  ({ theme }) => css`
    margin-top: 1.875rem;
    color: ${theme.palette.secondary.contrastText};

    span {
      color: ${theme.palette.common.white};
    }
  `,
)
