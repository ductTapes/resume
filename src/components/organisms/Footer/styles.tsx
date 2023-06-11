import { Box, BoxProps, styled, Typography } from '@mui/material'
import { css } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'
import Link from 'src/components/atoms/Link'
import shouldForwardProp from 'src/helpers/shouldForwardProp'

export const Root = styled(props => <Box component="footer" {...props} />)<BoxProps>(
  ({ theme }) => css`
    background-image: url('/images/grid.png');
    padding: 9rem 0 15rem;

    ${theme.breakpoints.down('md')} {
      padding: 5rem 0 9rem;
    }

    ${theme.breakpoints.down('sm')} {
      padding: 4rem 0;
    }
  `,
)

export const Block = styled(Box)(
  ({ theme }) => css`
    display: flex;
    border-top: 2px solid ${theme.palette.common.black};
    border-bottom: 2px solid ${theme.palette.common.black};

    ${theme.breakpoints.down('sm')} {
      border: none;
      flex-direction: column;
    }

    & + & {
      margin-top: 1.5rem;

      ${theme.breakpoints.down('sm')} {
        margin-top: 2rem;
      }
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;

    ${theme.breakpoints.down('md')} {
      font-size: 1.125rem;
      padding: 1.125rem;
    }

    ${theme.breakpoints.down('sm')} {
      width: 100%;
      border: none;
      padding: 1rem;
      text-align: center;
      justify-content: center;
    }
  `,
)

export const BlockLinkContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.secondary.light};
    padding: 1.5rem;
    flex-grow: 1;

    ${theme.breakpoints.down('md')} {
      padding: 1.125rem;
    }

    ${theme.breakpoints.down('sm')} {
      width: 100%;
      border: none;
      padding: 1rem;
      text-align: center;
      justify-content: center;
    }
  `,
)

export const BlockLink = styled(Link)(
  ({ theme }) => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.5;

    ${theme.breakpoints.down('md')} {
      font-size: 1.125rem;
    }
  `,
)
