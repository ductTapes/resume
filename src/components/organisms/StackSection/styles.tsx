import { Box, css, styled } from '@mui/material'

export const Root = styled(Box)(
  ({ theme }) => css`
    padding: 11.625rem 0;

    ${theme.breakpoints.down('sm')} {
      padding: 4rem 0;
    }
  `,
)

export const CardsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  overflow-x: auto;
`
