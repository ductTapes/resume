import * as S from './styles'
import { Typography } from '@mui/material'
import { HighlighterIcon } from 'src/components/atoms/svg/index'
import { useRef } from 'react'
import useIsInViewport from 'src/hooks/useIsInViewport'
import Container from 'src/components/atoms/Container/Container'

const AboutMeSection = () => {
  const highlightedTextRef = useRef<Element | null>(null)
  const isInViewport = useIsInViewport(highlightedTextRef)

  return (
    <S.Root>
      <Container>
        <Typography>
          I am{' '}
          <S.HighlightedText ref={highlightedTextRef} isViewed={isInViewport}>
            {' '}
            a full stack developer with 3.5 years of{' '}
            <S.Highlighter preserveAspectRatio="xMinYMid slice" component={HighlighterIcon} />
          </S.HighlightedText>
          commercial experience. I worked with projects on various technologies. In my experience I
          have developed more than 10 projects as a frontend developer and one of my own as a
          backend developer. Temporarily was a team leader.
        </Typography>
      </Container>
    </S.Root>
  )
}

export default AboutMeSection
