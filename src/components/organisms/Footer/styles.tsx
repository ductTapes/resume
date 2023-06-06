import { Box, BoxProps, styled, Typography } from '@mui/material'
import { css } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'
import Link from 'src/components/atoms/Link'
import shouldForwardProp from '../../../helpers/shouldForwardProp'

export const Root = styled(props => <Box component="footer" {...props} />)<BoxProps>`
  background-image: url('/images/grid.png');
  padding: 9rem 0 15rem;
`

export const Block = styled(Box)(
  ({ theme }) => css`
    display: flex;
    border-top: 2px solid ${theme.palette.common.black};
    border-bottom: 2px solid ${theme.palette.common.black};

    & + & {
      margin-top: 1.5rem;
    }
  `,
)

export const BlockTitle = styled(Typography, { shouldForwardProp: shouldForwardProp('$color') })<{
  $color: keyof Theme['palette']['common']
}>(
  ({ theme, $color }) => css`
    padding: 1.5rem;
    background-color: ${theme.palette.common[$color]};
    //flex-grow: 1;
    width: 45%;
    text-align: right;
    border-right: 2px solid ${theme.palette.common.black};
    font-weight: 700;
    color: ${theme.palette.text.primary};
  `,
)

export const BlockLinkContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.secondary.light};
    padding: 1.5rem;
    flex-grow: 1;
  `,
)

export const BlockLink = styled(Link)(
  () => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.5;
  `,
)
