import { Box, styled, css } from '@mui/material'
import { ContainerProps } from 'src/components/atoms/Container/types'
import shouldForwardProp from '../../../helpers/shouldForwardProp'

export const Root = styled(Box, {
  shouldForwardProp: shouldForwardProp('size'),
})<{ size: ContainerProps['size'] }>(
  ({ theme, size }) => css`
    ${size === 'default' &&
    css`
      padding: 0 7.5rem;

      ${theme.breakpoints.down('lg')} {
        padding: 0 1.75rem;
      }
    `}

    ${size === 'small' &&
    css`
      padding: 0 3.625rem;

      ${theme.breakpoints.down('lg')} {
        padding: 0 1rem;
      }
    `}
    
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
  `,
)
