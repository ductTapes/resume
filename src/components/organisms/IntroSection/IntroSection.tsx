import Button from 'src/components/atoms/Button/Button'
import * as S from './styles'

const IntroSection = () => {
  return (
    <S.Root>
      <S.WelcomeContainer>
        <S.Name>
          <S.NameLine component="span" variant="inherit">
            I’m Grishchenko <S.WhiteLetters>Yura</S.WhiteLetters>
          </S.NameLine>
          <S.NameLine component="span" variant="inherit">
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
  )
}

export default IntroSection
