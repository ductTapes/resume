import Button from 'src/components/atoms/Button'
import * as S from './styles'
import Container from 'src/components/atoms/Container'
import { useAppLoadAnimationContext } from 'src/components/atoms/AppLoadAnimation/AppLoadAnimationContextProvider'

const IntroSection = () => {
  const [{ isFinished: isFinishedAppLoadAnimation }] = useAppLoadAnimationContext()

  return (
    <Container>
      <S.Root showAnimation={isFinishedAppLoadAnimation}>
        <S.WelcomeContainer>
          <S.Name>
            <S.NameLine delay={0.7} showAnimation={isFinishedAppLoadAnimation} variant="inherit">
              <S.NameText>
                I’m Grishchenko <S.WhiteLetters>Yura</S.WhiteLetters>
              </S.NameText>
            </S.NameLine>
            <S.NameLine showAnimation={isFinishedAppLoadAnimation} delay={0.95} variant="inherit">
              <S.NameText>
                Full-stack deve<S.WhiteLetters>loper</S.WhiteLetters>
              </S.NameText>
            </S.NameLine>
          </S.Name>

          <S.ButtonContainer>
            <Button fullWidth>CV</Button>
          </S.ButtonContainer>
        </S.WelcomeContainer>

        <S.PhotoContainer>
          <S.Img src="/images/photo.png" alt="Grishchenko Yura" />
          <S.Img absolute src="/images/photo.png" alt="Grishchenko Yura" />
        </S.PhotoContainer>
      </S.Root>
    </Container>
  )
}

export default IntroSection
