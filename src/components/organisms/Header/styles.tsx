import { styled } from '@mui/material'
import LinkComponent from 'src/components/atoms/Link/Link'

export const Root = styled('header')`
  height: 4.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.375rem;
  position: fixed;
  top: 3.5rem;
  left: 0;
  width: 100%;
`

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 30rem;
  width: 100%;
`

export const Link = styled(LinkComponent)`
  font-size: 1.375rem;
`
