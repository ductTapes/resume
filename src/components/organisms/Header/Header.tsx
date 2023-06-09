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
        <Link
          to="/"
          onClick={() => {
            document.body.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <SvgIcon component={LogoIcon} />
        </Link>
      </S.LogoContainer>

      <S.Nav>
        <S.Link to="#about">About</S.Link>
        <S.Link to="#stack">Stack</S.Link>
        <S.Link to="#work">Work</S.Link>
        <S.Link to="#contact">Contact</S.Link>
      </S.Nav>
    </S.Root>
  )
}

export default Header
