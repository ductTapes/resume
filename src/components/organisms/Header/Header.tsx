import SvgIcon from 'src/components/atoms/SvgIcon'
import { LogoIcon } from 'src/components/atoms/svg'
import Link from 'src/components/atoms/Link'
import * as S from './styles'
import { useHeaderContext } from 'src/components/organisms/Header/HeaderContextProvider'
import { useAppLoadAnimationContext } from 'src/components/atoms/AppLoadAnimation/AppLoadAnimationContextProvider'

const Header = () => {
  const [{ isDarkMode }] = useHeaderContext()
  const [{ isFinished: isFinishedAppLoadAnimation }] = useAppLoadAnimationContext()

  return (
    <S.Root isDarkMode={isDarkMode} isFinishedAppLoadAnimation={isFinishedAppLoadAnimation}>
      <S.LogoContainer>
        <Link to="/">
          <SvgIcon component={LogoIcon} />
        </Link>
      </S.LogoContainer>

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
