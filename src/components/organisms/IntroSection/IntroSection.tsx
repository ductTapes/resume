import Button from 'src/components/atoms/Button'
import * as S from './styles'
import Container from 'src/components/atoms/Container'

const IntroSection = () => {
  return (
    <Container>
      <S.Root>
        <S.WelcomeContainer>
          <S.Name>
            <S.NameLine variant="inherit">
              I’m Grishchenko <S.WhiteLetters>Yura</S.WhiteLetters>
            </S.NameLine>
            <S.NameLine variant="inherit">
              Full-stack deve<S.WhiteLetters>loper</S.WhiteLetters>
            </S.NameLine>
          </S.Name>

          <S.ButtonContainer>
            <Button fullWidth>Download cvv</Button>
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
