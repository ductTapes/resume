import { Box, styled, css, BoxProps } from '@mui/material'
import { ContainerProps } from 'src/components/atoms/Container/types'
import React from 'react'

export const Root = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== 'size',
})(
  ({ size }: Pick<ContainerProps, 'size'>) => css`
    ${size === 'default' &&
    css`
      padding: 0 7.5rem;
    `}
    ${size === 'small' &&
    css`
      padding: 0 3.625rem;
    `}
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
  `,
) as React.FC<BoxProps & Pick<ContainerProps, 'size'>>
