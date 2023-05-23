import React, { PropsWithChildren } from 'react'
import * as S from './styles'

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <S.Root>{children}</S.Root>
}

export default Container
