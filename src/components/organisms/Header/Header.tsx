import SvgIcon from 'src/components/atoms/SvgIcon'
import { LogoIcon } from 'src/components/atoms/svg'
import { Box } from '@mui/material'
import Link from 'src/components/atoms/Link'
import * as S from './styles'

const Header = () => {
  return (
    <S.Root>
      <Box>
        <Link to="/">
          <SvgIcon component={LogoIcon} />
        </Link>
      </Box>

      <S.Nav>
        <S.Link to="/">About</S.Link>
        <S.Link to="/">Stack</S.Link>
        <S.Link to="/">Work</S.Link>
        <S.Link to="/">Contact</S.Link>
      </S.Nav>
    </S.Root>
  )
}

export default Header
