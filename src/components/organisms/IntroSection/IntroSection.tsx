import * as S from './styles'
import { Typography } from '@mui/material'

const IntroSection = () => {
  return (
    <S.Root>
      <S.WelcomeContainer>
        <S.Name>
          <Typography component="span" variant="inherit">
            I’m Grishchenko <S.WhiteLetters>Yura</S.WhiteLetters>
          </Typography>
          <Typography component="span" variant="inherit">
            Full-stack deve<S.WhiteLetters>loper</S.WhiteLetters>
          </Typography>
        </S.Name>

        <S.PhotoContainer>
          <S.Img src="/images/photo.png" alt="Grishchenko Yura" />
          <S.Img absolute src="/images/photo.png" alt="Grishchenko Yura" />
        </S.PhotoContainer>
      </S.WelcomeContainer>
    </S.Root>
  )
}

export default IntroSection
