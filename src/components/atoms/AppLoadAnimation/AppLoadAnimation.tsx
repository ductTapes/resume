import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { useAppLoadAnimationContext } from 'src/components/atoms/AppLoadAnimation/AppLoadAnimationContextProvider'

const DURATION = 1.25
const DELAY = 0.5

const AppLoadAnimation: React.FC = () => {
  const [wasStarted, setWasStarted] = useState(false)
  const [{ isFinished }, { setIsFinished }] = useAppLoadAnimationContext()

  useEffect(() => {
    setWasStarted(true)

    setTimeout(() => {
      setIsFinished(true)
    }, (DURATION + DELAY) * 1000)
  }, [])

  return <S.Root delay={DELAY} duration={DURATION} isFinished={isFinished} start={wasStarted} />
}

export default AppLoadAnimation
