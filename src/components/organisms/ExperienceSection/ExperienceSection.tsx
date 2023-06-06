import * as S from './styles'
import {
  BlockchainProjectBlock,
  CmsProjectBlock,
  InstagramProjectBlock,
} from 'src/components/molecules/ExperienceBlocks'
import { useEffect, useRef } from 'react'
import throttle from 'src/helpers/throttle'
import { useHeaderContext } from 'src/components/organisms/Header/HeaderContextProvider'

const ExperienceSection = () => {
  const [, { setIsDarkMode }] = useHeaderContext()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScrollHandler = throttle(() => {
      if (rootRef.current) {
        const topPosition = rootRef.current.getBoundingClientRect().top

        if (topPosition < 80 && topPosition + rootRef.current.offsetHeight > 80) {
          setIsDarkMode(true)
        } else {
          setIsDarkMode(false)
        }
      }
    }, 300)

    window.addEventListener('scroll', onScrollHandler)

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [])
  return (
    <S.Root ref={rootRef} id="work">
      <S.Container size="small">
        <CmsProjectBlock />
        <InstagramProjectBlock />
        <BlockchainProjectBlock />
      </S.Container>
    </S.Root>
  )
}

export default ExperienceSection
