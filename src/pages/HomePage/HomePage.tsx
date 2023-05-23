import IntroSection from 'src/components/organisms/IntroSection'
import AboutMeSection from 'src/components/organisms/AboutMeSection/AboutMeSection'
import StackSection from 'src/components/organisms/StackSection/StackSection'

import * as S from './styles'

const HomePage = () => {
  return (
    <S.Root>
      <IntroSection />
      <AboutMeSection />
      <StackSection />
    </S.Root>
  )
}

export default HomePage
