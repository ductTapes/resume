import Button from 'src/components/atoms/Button'
import * as S from './styles'
import Container from 'src/components/atoms/Container'
import { useAppLoadAnimationContext } from 'src/components/atoms/AppLoadAnimation/AppLoadAnimationContextProvider'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import useResize from 'src/hooks/useResize'

const NameLetter: React.FC<{ character: string; leftOffsetForChangingColor: number }> = ({
  character,
  leftOffsetForChangingColor = 0,
}) => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const { right = 0, width = 0 } = spanRef.current?.getBoundingClientRect() || {}

  return (
    <S.NameLetter ref={spanRef} white={right - width * 0.3 >= leftOffsetForChangingColor}>
      {character}
    </S.NameLetter>
  )
}

const NameText: React.FC<{ text: string; leftOffsetForChangingColor: number }> = ({
  text,
  leftOffsetForChangingColor,
}) => {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <Typography component="span" variant="inherit" ref={containerRef}>
      {text.split('').map((character, i) => (
        <NameLetter
          key={i}
          character={character}
          leftOffsetForChangingColor={leftOffsetForChangingColor}
        />
      ))}
    </Typography>
  )
}

const IntroSection = () => {
  const [{ isFinished: isFinishedAppLoadAnimation }] = useAppLoadAnimationContext()
  const [leftPhotoContainer, setLeftPhotoContainer] = useState(0)
  const photoContainerRef = useRef<HTMLDivElement>(null)

  const calcLeftPhotoContainer = useCallback(() => {
    if (photoContainerRef.current) {
      setLeftPhotoContainer(photoContainerRef.current.getBoundingClientRect().left)
    }
  }, [])

  useResize(calcLeftPhotoContainer)

  useEffect(() => {
    calcLeftPhotoContainer()
  }, [calcLeftPhotoContainer])

  return (
    <Container>
      <S.Root showAnimation={isFinishedAppLoadAnimation}>
        <S.WelcomeContainer>
          <S.Name>
            <S.NameLine delay={0.7} showAnimation={isFinishedAppLoadAnimation} variant="inherit">
              <S.NameText>
                <NameText text="I’m Maxim Ivanov" leftOffsetForChangingColor={leftPhotoContainer} />
              </S.NameText>
            </S.NameLine>
            <S.NameLine showAnimation={isFinishedAppLoadAnimation} delay={0.95} variant="inherit">
              <S.NameText>
                <NameText
                  text="Full-stack developer"
                  leftOffsetForChangingColor={leftPhotoContainer}
                />
              </S.NameText>
            </S.NameLine>
          </S.Name>

          <S.ButtonContainer>
            <Button
              onClick={() => {
                window.open('/documents/maxim-ivanov.pdf')
              }}
              fullWidth
            >
              CV
            </Button>
          </S.ButtonContainer>
        </S.WelcomeContainer>

        <S.PhotoContainer ref={photoContainerRef}>
          <S.Img width={500} height={442} src="/images/photo.webp" alt="Maxim Ivanov" />
          <S.Img absolute src="/images/grid.webp" alt="grid background" />
        </S.PhotoContainer>
      </S.Root>
    </Container>
  )
}

export default IntroSection
