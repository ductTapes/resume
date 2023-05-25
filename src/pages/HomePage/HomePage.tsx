import IntroSection from 'src/components/organisms/IntroSection'
import AboutMeSection from 'src/components/organisms/AboutMeSection/AboutMeSection'
import StackSection from 'src/components/organisms/StackSection/StackSection'
import ExperienceSection from 'src/components/organisms/ExperienceSection/ExperienceSection'

import * as S from './styles'

const HomePage = () => {
  return (
    <S.Root>
      <IntroSection />
      <AboutMeSection />
      <StackSection />
      <ExperienceSection />
    </S.Root>
  )
}

export default HomePage
