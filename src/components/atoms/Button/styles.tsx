import { Button as MUIButton, styled, ButtonProps } from '@mui/material'
import { css } from '@mui/material/styles'

export const Button = styled(MUIButton)<ButtonProps>(
  ({ theme }) => css`
    &.MuiButton-contained {
      padding: 0.75rem;
      box-shadow: none;
      border-radius: 1.25rem 0;
      transition: background-color 0.2s linear;

      ${theme.breakpoints.down('sm')} {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
        border-radius: 0.625rem 0;
      }
    }

    &.MuiButton-containedPrimary {
      border: 1px solid ${theme.palette.common.black};
      background-color: ${theme.palette.common.white};

      &:hover,
      &:active {
        background-color: ${theme.palette.primary.main};
      }
    }
  `,
)
