import IntroSection from 'src/components/organisms/IntroSection'
import AboutMeSection from 'src/components/organisms/AboutMeSection/AboutMeSection'

import * as S from './styles'

const HomePage = () => {
  return (
    <S.Root>
      <IntroSection />
      <AboutMeSection />
    </S.Root>
  )
}

export default HomePage
