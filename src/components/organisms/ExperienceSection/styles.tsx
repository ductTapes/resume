import { Box, styled, css } from '@mui/material'
import ContainerComponent from 'src/components/atoms/Container'

export const Root = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.common.black};
    padding: 3.625rem 0;
  `,
)

export const Container = styled(ContainerComponent)`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
`
