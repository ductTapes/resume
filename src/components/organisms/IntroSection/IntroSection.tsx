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
              <S.NameText>
                I’m Grishchenko <S.WhiteLetters>Yura</S.WhiteLetters>
              </S.NameText>
            </S.NameLine>
            <S.NameLine delay={0.75} variant="inherit">
              <S.NameText>
                Full-stack deve<S.WhiteLetters>loper</S.WhiteLetters>
              </S.NameText>
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
